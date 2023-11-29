import React, { useState } from 'react';
import '../FAQ.css';
import '../Hero.css';
function FAQ() {
  const [accordionStates, setAccordionStates] = useState(
    Array(6).fill(false)
  );

  const togglePanel = (index) => {
    const newAccordionStates = accordionStates.map((state, i) =>
      i === index ? !state : false
    );
    setAccordionStates(newAccordionStates);
  };

  return (
    <div className='container1'>
      <h1>Frequently Asked Questions</h1>
      <div>
        {[
          'What is Netflix?',
          'How Much does Netflix cost?',
          'Where can I watch?',
          'How do I cancel?',
          'What can I watch on Netflix?',
          'Is Netflix good for kids?',
        ].map((question, index) => (
          <div key={index}>
            <button
              className="accordian"
              onClick={() => togglePanel(index)}
            >
              {question}
            </button>
            <div className={`panel ${accordionStates[index] ? 'open' : ''}`}>
              {getContent(index)}
            </div>
          </div>
        ))}
      </div>
      <div className="textcenter">
        <p>Ready to Watch? Enter Your Email to create or restart your membership</p></div>
        <div className="rowt">
        <input className="emailInput" type='email' placeholder='Email address'></input>
        <button className='getStartBtn'>Get Started &gt;</button>
        </div>
    </div>
  );
}

function getContent(index) {
  // eslint-disable-next-line default-case
  switch (index) {
    case 0:
      return (
        <>
          <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices.</p>
          <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
        </>
      );
    case 1:
      return (
        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
      );
    case 2:
      return (
        <>
          <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.</p>
          <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
        </>
      );
    case 3:
      return (
        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
      );
    case 4:
      return (
        <p>NNetflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>);
    case 5:
      return (
        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
      );
      case 6:
        return (
            <>
          <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
          </p>
          <p>
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </p></>
        );
        default:
            return(
                <></>
            );
    }
}    

export default FAQ;