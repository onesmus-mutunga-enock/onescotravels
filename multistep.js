let currentStep = 1;
const steps=3;
function nextStep() {
    if (currentStep < steps) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
    }
    return false;
}


function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.add('active');
    }
    return false;
}
function submit(){

    alert("This is the last page click SUBMIT button below");
    // window.location.reload();
}



document.addEventListener('DOMContentLoaded', function() {
    // Show sec1 by default
    const defaultTab = document.getElementById('home');
    defaultTab.style.display = 'block';

    
    
    // Show all content within the default tab
    // const content = defaultTab.querySelector('#content');
    // const tabContents = content.querySelectorAll('.tab-content');
    // tabContents.forEach(tabContent => {
    //     tabContent.style.display = 'block';
    // });
});

document.addEventListener('DOMContentLoaded', function() {
    // Show sec1 by default
    const defaultTab = document.getElementById('next-tab');
    defaultTab.style.display = 'none';
});



function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-display');
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.style.display = 'block';
            // Show all content within the selected tab
            // const content = tab.querySelector('#content');
            // const tabContents = content.querySelectorAll('.tab-content');
            // tabContents.forEach(tabContent => {
            //     tabContent.style.display = 'block';
            // });
        } 
        else {
            tab.style.display = 'none';
        }
    });
}


// Function to match passwords
function passcheck()
{  
    let flag=false;
    var pass1 = document.regist.pass1.value;  
    var pass2 = document.regist.pass2.value;  
    
    // Check if passwords match
    if(pass1 === pass2)
    {  
      
        flag=true; 
        // return true;
    }  
    else
    {  
        const print= document.getElementById('print');
        const info= 'Passwords do not match !!!!';
        print.innerHTML=info;

        // Set a timeout to remove the content after 4 seconds (4000 milliseconds)
setTimeout(function() {
    print.innerHTML = '';
  }, 4000);
        return false;  
    }  

    if(flag){
        if(pass1==1234 || pass.legth<=8)
        {document.getElementById('print').innerHTML="Please provide a better password  Mix words and characters";
        
        // Set a timeout to remove the content after 3 seconds (3000 milliseconds)
        setTimeout(function() {
            document.getElementById('print').style.display='';
          }, 3000);
          return false;
    
       }
       else{
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function() {
            document.getElementById('successMessage').style.display = '';
          }, 4000);
          return true;
    }
    
}
}  

function checkPasswordStrength() {
    var password = document.getElementById('pass1').value;
    var fill = document.getElementById('fill');

    // Define your criteria for password strength using regular expressions
    var levels = [
      { regex: new RegExp("^(?=.{1,}).*$"), color: '#FF0000' }, // Very Weak
      { regex: new RegExp("^(?=.{4,}).*$"), color: '#FF4500' }, // Weak
      { regex: new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z]).*$"), color: '#FFA500' }, // Fair
      { regex: new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$"), color: '#FFFF00' }, // Good
      { regex: new RegExp("^(?=.{12,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W).*$"), color: '#ADFF2F' }, // Strong
      { regex: new RegExp("^(?=.{16,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W).*$"), color: '#32CD32' } // Very Strong
    ];

    for (var i = 0; i < levels.length; i++) {
      if (levels[i].regex.test(password)) {
        fill.style.width = ((i + 1) / levels.length) * 100 + '%';
        fill.style.backgroundColor = levels[i].color;
        return;
      }
    }
  }


  function togglePasswordVisibility() {
    var passwordInput = document.getElementById('pass');
    var togglePasswordButton = document.getElementById('togglePassword');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordButton.textContent = 'Hide Password';
    } else {
      passwordInput.type = 'password';
      togglePasswordButton.textContent = 'Show Password';
    }
  }