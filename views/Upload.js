import React, {useState} from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Form,
  Button,
  Text,
  Item,
  H2,
} from 'native-base';
import {
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import {fetchGET, fetchPOST} from '../hooks/APIHooks';
import FormTextInput from '../components/FormTextInput';
import useUploadForm from '../hooks/UploadHooks';
import handleUpload from '../hooks/UploadHooks';

const Upload = (props) => {
  const [error, setError] = useState('');
  const {
    handleTitleChange,
    handleDescriptionChange,
    inputs,
  } = useUploadForm();
  return (
    <Container>
      <Header>
        <Body><Title>MyApp</Title></Body>
      </Header>
      <Content>
        {/* login form */}
        <Form>
          <Title>
            <H2>Upload a File</H2>
          </Title>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.title}
              placeholder='title'
              onChangeText={handleTitleChange}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.description}
              placeholder='description'
              onChangeText={handleDescriptionChange}
            />
          </Item>
          <Button full onPress={handleUpload}><Text>UPLOAD</Text></Button>
        </Form>
        <Text>{error}</Text>
      </Content>
    </Container>
  );
};

// proptypes here
Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
