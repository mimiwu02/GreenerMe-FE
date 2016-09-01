import React, {Component} from 'react'
import "../styles/about.css";

class About extends Component {

    render() {
      return (
        <div className="container">
          <div className="row" id="intro">
            <h2>THE BEGINNING</h2>
              <p>
                I remember reading an article about a couple of years ago about Brunei, an oil-rich country located in the South China Sea. The country wanted to improve food security for its people by improving local agriculture such as improving the domesitc rice production. Always thinking ahead, the country analyzed weather data to improve their people's lives. The country are reliant on this data to make accurate predictions on the most optimal time to start growing rice locally. After reading this, I was inspired to do something to make an impact on people's lives by helping them work smarter. I started to realize how popular the farmer's market was amongst my friends because they were all interested in eating more healthy and more organic food but it was also a bit costly. As a result of this, I created this Greener Me app to form a community of growers and traders. This application is in its first iteration so there are more features I would like to add, such as the equiping growers the ability to know when the best time it is to start growing vegetables and fruits just as how Brunei does it. This is through providing weather forecasts and the almanac that spans 10 to 30 years or more. I am from NYC, so there have been community gardens popping up, which gave me an idea of have an app that will allow traders who have an abundance of a particular vegetable or fruit to be able to find out who in their area is willing to make an exchange. I hope you have fun using this app as much as I did building it! Suggestions to improve this app are welcomed!</p>

        </div>
          <div className="bio row">
            <div className="img col-md-4 col-sm-12"><img className="img-circle" src="http://i751.photobucket.com/albums/xx156/Moirae54/mefruit.jpg" role="presentation"/>
          </div>

          <div className="copy col-md-8 col-sm-12">
            <h2>About Me</h2> <p>A Brooklyn native, Mimi is a full stack web developer who other than coding, finds pleasure in keeping herself busy by learning new things, traveling, hiking, trying new food spots in New York City, and reading. She loves picking fresh fruits when she can. Her favorite fruits to pick includes strawberries, asian pears, and nectarines. You can find her on twitter: <a href="www.twitter.com/MisquaredWu">@MisquaredWu</a></p></div>
          </div>
        </div>
    )};
}

export default About;
