import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './main.less';
import { CHECKEDPNG } from './img/checked';
import { UNCHECKEDPNG } from './img/unchecked';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
    }
    static displayName = 'Checkbox';

    static propTypes = {
        /**
         * options
         */
         options: PropTypes.array,
        /**
         * value
         */
         defaultValue: PropTypes.array,
         /**
         * function
         */
         onChange: PropTypes.func,
    };

    static defaultProps = {
      options: [],
      value: [],
    };

    handleChange(v) {
      let { defaultValue, onChange } = this.props;
      let newValue = defaultValue.concat([]);
      if(newValue.includes(v)){
        newValue = newValue.filter( o=> o!==v);
      }else{
        newValue.push(v);
      }
      if(onChange) onChange(newValue);
    }

    render() {
        const { defaultValue, options } = this.props;

        return (
            <div className="anCheckbox">
                {
                  options.length ? options.map(v => {
                    return (
                      <div key={v.value} className={'anCheckboxLi'} onClick={this.handleChange.bind(this, v.value)}>
                        <img src={defaultValue.includes(v.value)?CHECKEDPNG:UNCHECKEDPNG} alt='' />
                        <span className={defaultValue.includes(v.value) ? 'anCheckboxSelected' : ''} style={{color: v.color ? v.color : '#64708F'}}>{v.label}</span>
                      </div>
                    )
                  }) : null
                }
            </div>
        );
    }
}
