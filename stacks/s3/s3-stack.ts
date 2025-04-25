import { Bucket } from "aws-cdk-lib/aws-s3";
import { Stack, StackProps} from "aws-cdk-lib";
import { Construct } from "constructs";
import { Function } from "aws-cdk-lib/aws-lambda";
import { LambdaFunction } from "aws-cdk-lib/aws-events-targets";

export interface StorageStackProps extends StackProps{
    lambdaFunction: Function
}

export class StorageStack extends Stack{
    constructor(scope: Construct, id: string, props: StorageStackProps){
        super(scope, id, props);

        const uploadBucket = new Bucket(this, 'upload-bucket');
        const outputBucket = new Bucket(this, 'output-bucket');

        uploadBucket.grantReadWrite(props.lambdaFunction);
        outputBucket.grantReadWrite(props.lambdaFunction);
    }
}