const core = require('@actions/core');//input an doutput
const exec = require('@actions/exec');//uploading to s3



function run() {
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('bucket-region', { required: true });




const s3URL  = `s3://${bucket}`;
exec.exec(`aws s3 sync ${distFolder} ${s3URL} ...region ${bucketRegion}`)
//`aws s3 sync folder1 s3://projectskillsmatch --region us-east-1`


//GET URL
const websiteURL= `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`
core.setOutput('website-url', websiteURL);
    
}
run()