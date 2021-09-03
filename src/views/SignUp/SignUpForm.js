import React, { useRef, useEffect } from 'react';
import { Row, Col, Input, Label, Form, FormFeedback } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import { selectStyles } from '../../constants/config';
import useSignUpForm from './hooks/useSignUpForm';
import Button from '../../components/Button/Button';
import CheckBox from '../../components/CheckBox/CheckBox';
import Select from 'react-select';

const SignUpForm = () => {
  const firstNameRef  = useRef(null);
  const { firstName, lastName, email, validate, reset, onSubmitData, onSelectResident, onCheckedAdvance, onCheckedAlert, onCheckedOther, stateChecked, stateSelected } = useSignUpForm();
  const { resident } = stateSelected;

  useEffect(()=>{
    firstNameRef.current.focus();
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const errors = validate();
    if (!errors && resident !=='') {
      const params = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        checkedAdvance: stateChecked.advance,
        checkedAlert: stateChecked.alert,
        checkedOther: stateChecked.other,
        resident: resident
      }
      onSubmitData(params);
    }
  }

  const onResetForm = () => {
    firstNameRef.current.focus();
    reset();
  }
  const onSelect = (e) => {
    onSelectResident(e);
  }

  const options = [
    { value: 1, label: 'EU France' },
    { value: 2, label: 'EU Germany' },
    { value: 3, label: 'EU Italy' },
    { value: 4, label: 'EU Spain' },
    { value: 5, label: 'EU UK' }
  ];

  return (
    <Form onSubmit={onSubmitForm}>
      <Row >
        <Col xs={isMobile ? 12 : 6} >
          <Label for='firstName' className='py-2 text-size-12 text-gray'>FIRST NAME *</Label>
          <Input id='firstName' {...firstName} className='shadow-none' innerRef={firstNameRef} />
          <FormFeedback>{firstName.message}</FormFeedback>
        </Col>
        <Col xs={isMobile ? 12 : 6}>
          <Label for='lastName' className='py-2 text-size-12 text-gray'>LAST NAME *</Label>
          <Input id='lastName' {...lastName} className='shadow-none' />
          <FormFeedback>{lastName.message}</FormFeedback>
        </Col>
      </Row>
      <Row>
        <Col xs={isMobile ? 12 : 6}>
          <Label for='email' className='py-2 text-size-12 text-gray'>EMAIL ADDRESS *</Label>
          <Input id='email' {...email} className='shadow-none' />
          <FormFeedback>{email.message}</FormFeedback>
        </Col>
        <Col xs={isMobile ? 12 : 6}>
          <Label className='py-2 text-size-12 text-gray'>ORGANIZATION</Label>
          <Input className='shadow-none' />
        </Col>
      </Row>
      <Row>
        <Col xs={isMobile ? 12 : 6}>
          <Label for='state' className='py-2 text-size-12 text-gray'>EU RESIDENT *</Label>
          <Select id='state' options={options} onChange={onSelect} value={stateSelected.residentObj || ''} styles={selectStyles} />
        </Col>
      </Row>
      <Row>
        <Col xs={isMobile ? 12 : 6}>
          <CheckBox name='idAdvance' text={'ADVANCES'} value={stateChecked.advance} onChange={onCheckedAdvance} className='text-gray'/>
        </Col>
        <Col xs={isMobile ? 12 : 6}>
          <CheckBox name='idAlert' text={'ALERTS'} value={stateChecked.alert} onChange={onCheckedAlert} className='text-gray'/>
        </Col>
      </Row>
      <Row>
        <Col xs={isMobile ? 12 : 6}>
          <CheckBox name='idOther' text={'OTHER COMMUNICATIONS'} value={stateChecked.other} onChange={onCheckedOther} className='text-gray'/>
        </Col>
      </Row>
      <Row className='py-3'>
        <Col xs={isMobile ? 6 : 2}>
          <Button type='submit' className='w-100'  variant='purple' size='sm' text='Submit' />
        </Col>
        <Col xs={isMobile ? 6 : 2}>
          <Button type='reset' onClick={onResetForm} className='w-100' variant='white' size='sm' text='Reset' />
        </Col>
      </Row>
    </Form> 
  )
}

export default SignUpForm;

