//1. Lucian's Lasagna 
    const expected_min_in_oven = 40;
    const prep_time_per_layer = 2;

    function totalTimeInMinutes(remainingTimeInOven , prepTime){
        const totalTime = (2*prepTime) + remainingTimeInOven;
        console.log(`${totalTime} Minutes`);
    }
    totalTimeInMinutes(10, 12);
//2. Space Age
    const rotationTime = {
        "Mercury" :  0.2408467,
        "Venus": 0.61519726 ,
        "Earth": 1,
        "Mars":  1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }

    const earthYear = 31557600;

    function age(seconds) {
        const calcAge = Number(seconds/(rotationTime.Mercury*earthYear));
        console.log(calcAge.toFixed(2));
    }
    age(2134835688);

// Freelancer rates
function FreelancerRates(ratePerHr, billableHr , discount){
    dayRate = ratePerHr * 8;
    //totalBillable = billable * dayRate;
    const totalEstimate = (dayRate * billableHr)/discount;
    console.log(`${totalEstimate.toFixed(3)} Rupees`);
}
FreelancerRates(2000, 20, 0.42);
