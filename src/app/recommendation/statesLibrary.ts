export class StatesLibrary {

  private readonly states: Map<string, string>;

  public getStates(): Map<string, string> {
    return this.states;
  }

  constructor() {
    this.states = new Map();
    //US
    this.states.set("AL", "Alabama");
    this.states.set("AK", "Alaska");
    this.states.set("AZ", "Arizona");
    this.states.set("AR", "Arkansas");
    this.states.set("CA", "California");
    this.states.set("CO", "Colorado");
    this.states.set("CT", "Connecticut");
    this.states.set("DE", "Delaware");
    this.states.set("DC", "District Of Columbia");
    this.states.set("FL", "Florida");
    this.states.set("GA", "Georgia");
    this.states.set("HI", "Hawaii");
    this.states.set("ID", "Idaho");
    this.states.set("IL", "Illinois");
    this.states.set("IN", "Indiana");
    this.states.set("IA", "Iowa");
    this.states.set("KS", "Kansas");
    this.states.set("KY", "Kentucky");
    this.states.set("LA", "Louisiana");
    this.states.set("ME", "Maine");
    this.states.set("MD", "Maryland");
    this.states.set("MA", "Massachusetts");
    this.states.set("MI", "Michigan");
    this.states.set("MN", "Minnesota");
    this.states.set("MS", "Mississippi");
    this.states.set("MO", "Missouri");
    this.states.set("MT", "Montana");
    this.states.set("NE", "Nebraska");
    this.states.set("NV", "Nevada");
    this.states.set("NH", "New Hampshire");
    this.states.set("NJ", "New Jersey");
    this.states.set("NM", "New Mexico");
    this.states.set("NY", "New York");
    this.states.set("NC", "North Carolina");
    this.states.set("ND", "North Dakota");
    this.states.set("OH", "Ohio");
    this.states.set("OK", "Oklahoma");
    this.states.set("OR", "Oregon");
    this.states.set("PA", "Pennsylvania");
    this.states.set("RI", "Rhode Island");
    this.states.set("SC", "South Carolina");
    this.states.set("SD", "South Dakota");
    this.states.set("TN", "Tennessee");
    this.states.set("TX", "Texas");
    this.states.set("UT", "Utah");
    this.states.set("VT", "Vermont");
    this.states.set("VA", "Virginia");
    this.states.set("WA", "Washington");
    this.states.set("WV", "West Virginia");
    this.states.set("WI", "Wisconsin");
    this.states.set("WY", "Wyoming");
    //Canada
    this.states.set("AB", "Alberta");
    this.states.set("BC", "British Columbia");
    this.states.set("MB", "Manitoba");
    this.states.set("NB", "New Brunswick");
    this.states.set("NL", "Newfoundland and Labrador");
    this.states.set("NS", "Nova Scotia");
    this.states.set("ON", "Ontario");
    this.states.set("PE", "Prince Edward Island");
    this.states.set("QC", "Quebec");
    this.states.set("SK", "Saskatchewan");
    this.states.set("NT", "Northwest Territories");
    this.states.set("NU", "Nunavut");
    this.states.set("YT", "Yukon");
  }
}
