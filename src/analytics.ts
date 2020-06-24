let logged; // for variables it's ok not to set the type

function sendAnalytics(data: string) { // for the parameters it's madatory
  console.log(data);
  logged = true;
  console.log(logged);
  
}

sendAnalytics("The data");
