const {spawn} = require('child_process');

const triggerAndWait = async () => {
    const child = spawn('bash', ['test.sh']);

    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`)
    })

    child.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`)
    })

    child.on('data', (data) => {
        console.log(`error: ${data}`)
    })

    child.on('exit', (code, signal) =>{
        if (code) console.log(`Process exit with code: ${code}`)
        if (signal) console.log(`Process killed with signal: ${signal}`)
        console.log(`Done ...`);
    })

    console.log("Ending script...")
}


module.exports = {
    triggerAndWait
};