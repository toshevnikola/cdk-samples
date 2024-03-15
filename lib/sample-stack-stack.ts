import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { aws_s3_notifications as s3_notifications } from 'aws-cdk-lib';
import { aws_lambda as lambda } from 'aws-cdk-lib';

export class SampleStackStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fileUploadLambdaHandler = new lambda.Function(this, 'FileUploadLambda', {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: 'index.handler',
      functionName:"sample-bucket-file-upload-lambda-trigger",
      code: lambda.Code.fromAsset('lambda'),
    });

    const bucket = new s3.Bucket(this, 'SampleBucket', {
      versioned: true,
      bucketName: "sample-bucket",
      blockPublicAccess: new s3.BlockPublicAccess({ blockPublicPolicy: true }),
    });
    bucket.grantWrite(fileUploadLambdaHandler);
    bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3_notifications.LambdaDestination(fileUploadLambdaHandler))};
}
