import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ApiGatewayStack } from '../stacks/api-gw/api-gw-stack';
import { LambdaStack } from '../stacks/lambda/lambda-stack';
import { StorageStack } from '../stacks/s3/s3-stack';
export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const lambda = new LambdaStack(this, "LambdaStack");
    const apiGw = new ApiGatewayStack(this, "ApiGatewayStack", {backendFunction: lambda.handlerFunction});
    const s3 = new StorageStack(this, 'StorageStack', {lambdaFunction: lambda.handlerFunction});
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'Cpsc454Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
