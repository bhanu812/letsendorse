class UserValidation{
  constructor(){
    this.dataMember=["Gender","Source","Source_Type","Employment_Status","Occupation","Current_Income","Assets","Status","Qualification",
    "Credit_History","Bank_Account","Need_Training"]
    this.Gender=["Male","Female"];
    this.Source=[ "Event", "Roadshow", "Referral","Word of mouth","Press"];
    this.Source_Type=["Inbound","Outbound"];
    this.Employment_Status=["Self-employed","Unemployed", "Employed"];
    this.Occupation=["Farmer","Mason", "Poultry Farmer", "Shopkeeper", "Mechanic", "Teacher", "Housewife"];
    this.Current_Income=[ "<2", "2-5", "5-10", "10-20", ">20"];
    this.Assets=[ "None", "Land", "House", "Shop", "Vehicles", "Cattle", "Others"];
    this.Status=[ "Interested in exploring", "Undergoing Training", "Training Complete", "Stream identified", "Resume Made", "Resume submitted", "Resume sent for processing", "Resume declined", "Resume accepted", "Due diligence", "Background check", "Job offer received", "No longer interested", "Deceased"];
    this.Qualification=["Never went to school", "5th pass", "8th pass", "10th pass", "12th pass", "Diploma", "Graduate", "Post-graduate"];
    this.Credit_History=["true","false"];
    this.Bank_Account=["true","false"];
    this.Need_Training=["true","false"];
  }

  validateData(dataVariable){
    let h=""
    for(let i in dataVariable){
      if(this[i])
      {
        if(this[i].indexOf(dataVariable[i])==-1)
        {
            alert(i + " can only have " + this[i].join())
            return false;
        }
      }
    }
    return true;
  }

}

export default UserValidation;
