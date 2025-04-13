const core = require('@actions/core'); // input and output
const exec = require('@actions/exec'); // uploading to s3

async function run() {
    try {
        const bucket = core.getInput('bucket', { required: true });
        const bucketRegion = core.getInput('bucket-region', { required: true });
        const distFolder = core.getInput('dist-folder', { required: true });

        const s3URL = `s3://${bucket}`;

        // Upload to S3
        await exec.exec('aws', ['s3', 'sync', distFolder, s3URL, '--region', bucketRegion]);

        // Get website URL
        const websiteURL = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
        core.setOutput('website-url', websiteURL);

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
