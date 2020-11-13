import React, {Component} from 'react';
import Header from './components/Header/Header';
import Hello from './components/SituationalComponents/Hello/Hello';
import NewGoalButton from './ui/NewGoalButton/NewGoalButton';
import Footer from './components/Footer/Footer';
// import Button from './ui/Button/Button'

class App extends Component {

    state = {
        appState: {

        }
    }

    onClickToggleHandler () {
        let button = document.querySelector('button');
        button.classList.toggle('button--focus')
    }

    render() {
        return (
            <>
                <Header onClickToggle = {this.onClickToggleHandler.bind(this)}/>
                <main className="main">
                    <Hello />
                    <NewGoalButton />
                </main>
                <Footer />
            </>
        )
    }
}

export default App