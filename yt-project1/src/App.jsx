import './App.css'
import Card from './Components/Card';

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?pid=Api",
      companyName: "Google",
      datePosted: "5 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "1 week ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "3 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://s.yimg.com/fz/api/res/1.2/qH2rben1W4M8jyRZuaeMNw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/18/1d/9c/181d9c6905a0a730588287c620e8cd1b.jpg",
      companyName: "IBM",
      datePosted: "4 days ago",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://s.yimg.com/fz/api/res/1.2/2zarwqd10qhiYpIPYypw8Q--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/ed/ff/57/edff570af25e29c91a457d5656f7a200.jpg",
      companyName: "Adobe",
      datePosted: "1 week ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "6 days ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      datePosted: "2 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/zoho.com",
      companyName: "Zoho",
      datePosted: "2 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Chennai, India",
    },
  ];

  
  return (
    <>
      <div className="parent">
        {jobOpenings.map(function(e){
          return <Card logo={e.brandLogo} company={e.companyName} date={e.datePosted} location={e.location} tag1={e.tag1} tag2={e.tag2} pay={e.pay}/>
        })}
      </div>
    </>
  )
}

export default App
