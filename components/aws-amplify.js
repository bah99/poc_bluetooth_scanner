import React from 'react';
import Amplify from 'aws-amplify';
import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import awsconfig from './aws-exports';
// or if you don't want to install all the categories
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import aws_exports from './aws-exports';

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());


// for sign a user (we dont need it here)
Auth.signUp({
	username: 'AmandaB',
	password: 'MyCoolPassword1!',
	attributes: {
		email: 'someemail@example.com',
	},
});

// signin to use aws services
Auth.signIn(username, password)
	.then(success => console.log('successful sign in'))
    .catch(err => console.log(err));
    

class Prediction extends React.Component {


interpretSentiment(dataToInterpret) {
    Predictions.interpret({
        text: {
          source: {
            text: dataToInterpret,
          },
          type: "ALL"
        }
      })
      .then(result => console.log({ result }))
      .catch(err => console.log({ err }));
}
}