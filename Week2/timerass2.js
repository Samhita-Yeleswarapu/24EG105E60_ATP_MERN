//2.OTP Countdown Simulator (Console App)
//Simulate OTP sending flow in Node.js:
        
//Show “OTP Sent Successfully”
// Start 10-second countdown      
       // Allow resend only after countdown ends
let seconds=10
       console.log("OTP Sent Successfully")
    let IntervalId= setInterval(()=>{
            seconds--;
            console.log(`OTP can resend after ${seconds} secs`)
            if (seconds==0) {
 console.log("Resend OTP")
clearInterval(IntervalId) }
       },1000)
