import React, {Component} from 'react'
import "../styles/about.css";

class About extends Component {

    render() {
      return (
        <div className="container">
          <div className="row" id="intro">
            <h2>THE BEGINNING</h2>
              <p>
                Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              </p>
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
