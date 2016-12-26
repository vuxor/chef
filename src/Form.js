import React from 'react';
import { Form, Input, Icon, Button } from 'antd';

import './Form.css';
const FormItem = Form.Item;

let uuid = 0;
class DynamicFieldSet extends React.Component {
  componentWillMount() {
    this.props.form.setFieldsValue({
      keys: [0],
    });
  }

  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one ingredient 
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    uuid++;
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  addNewRecipe(e) {
    e.preventDefault();
    //console.log('form submited');
    //console.log(this.props.form.getFieldsValue());
    this.props.form.validateFields((err, recipe) => {
      if (!err) {
        let keys = Object.keys(recipe);
        let ingKeys = keys.filter((key) => (
          /^ingredient/.test(key) 
        ));
        let ingArray = [];
        for (let key of ingKeys) {
          //console.log(key);
          ingArray.push(recipe[key])
        }
        let recipeObj = {};
        recipeObj.ingredients = ingArray;
        recipeObj.name = recipe.name;
        recipeObj.directions = recipe.directions;
        this.props.recipesStore.recipes.push(recipeObj);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 17 },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: { span: 17, offset: 7 },
    };

    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Ingredients' : ''}
          required={true}
          key={k}
        >
          {getFieldDecorator(`ingredient-${k}`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please input ingredient name or delete this field.",
            }],
          })(
            <Input placeholder="ingredient name" style={{ width: '60%', marginRight: 8 }} />
          )}
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        </FormItem>
      );
    });
    return (
      <Form horizontal className="align-left" onSubmit={this.addNewRecipe.bind(this)}>
        <FormItem label={ 'Name' } { ...formItemLayout } >
          {getFieldDecorator('name', {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please input name of the recipe",
            }],
          })(
            <Input type="text" />
          )}
        </FormItem>
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add
          </Button>
        </FormItem>
        <FormItem label={'Tell us how to prepare it'} {...formItemLayout}>
          {getFieldDecorator('directions', {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please input directions how to cook it",
            }],
          })(
            <Input type="textarea" rows={4} />
          )}
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">Cook it</Button>
        </FormItem>
      </Form>
    );
  }
}

export const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);

