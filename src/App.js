import react from "react";
import "./App.css";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      fullname: "elon musk",
      bio: "Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. Musk became a multimillionaire in his late 20s when he sold his start-up company, Zip2, to a division of Compaq Computers.",
      profession: "Entrepreneur -Investisseur-Designer",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FEnoughMuskSpam%2Fcomments%2Faogj75%2Felon_musk_was_bald_20_years_ago_and_i_love_it%2F&psig=AOvVaw0r8Z1I1-Xr4qLKgMi32E1h&ust=1639578982106000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiH86zC4_QCFQAAAAAdAAAAABAu",
      spn: false,
      timer: 0,
    };

    this.spn = this.spn.bind(this);
  }

  spn() {
    this.setState({ spn: !this.state.spn });
    if (!this.state.spn) {
      setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000);
    }else { this.setState({timer: 0})}
  }

render() {
    return (
      <div>
        {this.state.spn ? (
          <center>
            <div>
            
            <h1 id="full">{this.state.fullname}</h1>
            
            <h3 id="bio">{this.state.bio}</h3>
            <img id="img" src={this.state.image} height={200}/>
            <h2 id="pro">{this.state.profession}</h2>
            {this.state.timer}
          </div>
          </center>
        ) : null}
        <button onClick={this.spn}>del</button>
        <br />
      </div>
    );
  }
}

export default App;