import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './Grid.css'

class Grid extends Component {

    state = {
        flipper: false,
        boxes: ['topLeft', 'topCenter', 'topRight', 'middleLeft', 'middleCenter', 'middleRight', 'bottomLeft', 'bottomCenter', 'bottomRight'],
        topLeft: {
            position: 1,
            X: false,
            O: false,
        },
        topCenter: {
            position: 2,
            X: false,
            O: false,
        },
        topRight: {
            position: 3,
            X: false,
            O: false,
        },
        middleLeft: {
            position: 4,
            X: false,
            O: false,
        },
        middleCenter: {
            position: 5,
            X: false,
            O: false,
        },
        middleRight: {
            position: 6,
            X: false,
            O: false,
        },
        bottomLeft: {
            position: 7,
            X: false,
            O: false,
        },
        bottomCenter: {
            position: 8,
            X: false,
            O: false,
        },
        bottomRight: {
            position: 9,
            X: false,
            O: false,
        },
    }

    handleClick = propertyName => (event) => {

        if (this.state.flipper === false) {
            this.setState({
                flipper: !this.state.flipper,
                [propertyName]: {
                    ...this.state.propertyName,
                    X: true,
                    O: false,
                }
            })
        }
        else if (this.state.flipper === true) {
            this.setState({
                flipper: !this.state.flipper,
                [propertyName]: {
                    ...this.state.propertyName,
                    X: false,
                    O: true,
                }
            })
        }
        this.findWinner();
    }

    findWinner = () => {
        let boxes = this.state.boxes;
        let winnerIndex = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
        let winnerArr = [];

        
        for (let j = 0; j < winnerIndex.length; j++) {
            
            for (let i = 0; i < winnerIndex[j].length; i++) {
                if (this.state[boxes[winnerIndex[j][i]]].X) {
                  
                    winnerArr.push('X');
                    if (winnerArr.length === 3) {
                        console.log('XXX', winnerArr);
                        return alert('YOU WHEN PLAYER ONE!!!!');
                    }
                }
                else {
                    winnerArr = [];
                }
            }
            winnerArr = [];

            for (let i = 0; i < winnerIndex[j].length; i++) {
                if (this.state[boxes[winnerIndex[j][i]]].O) {

                    winnerArr.push('O');
                    if (winnerArr.length === 3) {
                        console.log('OOO', winnerArr);
                        return alert('YOU WHEN PLAYER TWO!!!!');
                    }
                }
                else {
                    winnerArr = [];
                }

            }
            winnerArr = [];

        }


    }

    renderSquares = (info, i) => {

        let state = this.state[info];
        if (i % 3 === 0 && i !== 0) {
            if (state.X === false && state.O === false) {
                return (
                    < >
                        <div className="grid" id={info} onClick={this.handleClick(info)}>&ensp;</div>
                        <br />
                    </>
                )
            }
            else if (state.X === true) {
                return (
                    < >
                        <div className="grid" key={i} id={info}>X</div>
                        <br />
                    </>
                )
            }
            else if (state.O === true) {
                return (
                    < >
                        <div className="grid" key={i} id={info}>O</div>
                        <br />
                    </>
                )
            }
        }
        else {
            if (state.X === false && state.O === false) {
                return (
                    <div className="grid" key={i} id={info} onClick={this.handleClick(info)}>&ensp;</div>
                )
            }
            else if (state.X === true) {
                return (
                    <div className="grid" key={i} id={info}>X</div>
                )
            }
            else if (state.O === true) {
                return (
                    <div className="grid" key={i} id={info}>O</div>
                )
            }
        }
    }

    renderXO = () => {
        return (
            <div >
                {/* {JSON.stringify(this.state)} */}
        {this.findWinner()}

                <br />
                {this.state.boxes.map((info, i) => (
                    this.renderSquares(info, i + 1)
                ))}
            </div>
        )
    }


    render() {

        return (
            <div>
                {this.state.flipper ? <h2>Player Two's Turn</h2> : <h2>Player One's Turn</h2>}
                <div>
                    {this.renderXO()}
                </div>
            </div>
        );
    }
}



export default Grid;