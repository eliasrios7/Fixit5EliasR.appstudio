
let dayOfWeek = prompt("Enter the day of the week")
  
  if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday' || dayOfWeek === 'Friday') {
        alert("It is a weekday.")
  } else if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
      alert("It is the weekend!")
  } else { 
      alert(`Your ${dayOfWeek} was not capitalized, full name of a day.`) }
      
