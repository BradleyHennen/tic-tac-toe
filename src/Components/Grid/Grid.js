import React, { Component } from 'react';
import './Grid.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);


class Grid extends Component {

    state = {
        flipper: false,
        boxes: ['topLeft', 'topCenter', 'topRight', 'middleLeft', 'middleCenter', 'middleRight', 'bottomLeft', 'bottomCenter', 'bottomRight'],
        topLeft: {
            X: false,
            O: false,
        },
        topCenter: {
            X: false,
            O: false,
        },
        topRight: {
            X: false,
            O: false,
        },
        middleLeft: {
            X: false,
            O: false,
        },
        middleCenter: {
            X: false,
            O: false,
        },
        middleRight: {
            X: false,
            O: false,
        },
        bottomLeft: {
            X: false,
            O: false,
        },
        bottomCenter: {
            X: false,
            O: false,
        },
        bottomRight: {
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
    }

    findWinner = () => {
        let boxes = this.state.boxes;
        let winnerIndex = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        let winnerArr = [];
        let check = true;


        for (let j = 0; j < winnerIndex.length; j++) {
            winnerArr = [];
            for (let i = 0; i < winnerIndex[j].length; i++) {
                if (this.state[boxes[winnerIndex[j][i]]].X) {

                    winnerArr.push('X');
                    if (winnerArr.length === 3) {
                        (MySwal.fire({
                            onOpen: () => {
                                MySwal.clickConfirm()
                            }
                        }).then(() => {
                            return MySwal.fire(<p>You Win Player One!!</p>)
                        }));
                        this.renderXO(true);
                        check = false;
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
                        (MySwal.fire({
                            onOpen: () => {
                                MySwal.clickConfirm()
                            }
                        }).then(() => {
                            return MySwal.fire(<p>You Win Player Two!!</p>)
                        }));
                        this.renderXO(true);
                        check = false;
                    }
                }
                else {
                    winnerArr = [];
                }

            }
        }

        winnerArr = [];

        if (check) {
            for (let x = 0; x < boxes.length; x++) {
                console.log('boxes', boxes[x]);

                console.log('this.state[boxes]', this.state[boxes[x]]);
                let check = this.state[boxes[x]];
                if (check.X === true || check.O === true) {
                    winnerArr.push('check');
                }
                else {
                    winnerArr = [];
                    return
                }
            }
            if (winnerArr.length === 9) {
                (MySwal.fire({
                    onOpen: () => {
                        MySwal.clickConfirm()
                    }
                }).then(() => {
                    return MySwal.fire(<p>Cats Game!!</p>)
                }));
                this.renderXO(true);
            }
        }
    }

    renderSquares = (info, i) => {
        let state = this.state[info];
        if (i % 3 === 0 && i !== 0) {
            if (state.X === false && state.O === false) {
                return (
                    <span>
                        <div className="grid" id={info} onClick={this.handleClick(info)}>&ensp;</div>
                        <br />
                    </span>
                )
            }
            else if (state.X === true) {
                return (
                    <span>
                        <div className="grid" id={info}>X</div>
                        <br />
                    </span>
                )
            }
            else if (state.O === true) {
                return (
                    <span>
                        <div className="grid" id={info}>O</div>
                        <br />
                    </span>
                )
            }
        }
        else {
            if (state.X === false && state.O === false) {
                return (
                    <span>
                        <div className="grid" id={info} onClick={this.handleClick(info)}>&ensp;</div>
                    </span>
                )
            }
            else if (state.X === true) {
                return (
                    <span>
                        <div className="grid" id={info}>X</div>
                    </span>
                )
            }
            else if (state.O === true) {
                return (
                    <span>
                        <div className="grid" id={info}>O</div>
                    </span>
                )
            }
        }
    }

    renderXO = (winner = false) => {
        if (winner === false) {
            this.findWinner();
            return (
                <div >
                    {this.state.boxes.map((info, i) => (
                        <span key={i}>
                            {this.renderSquares(info, i + 1)}
                        </span>
                    ))}
                </div>
            )
        } else if (winner === true) {
            this.setState({
                flipper: false,
                boxes: ['topLeft', 'topCenter', 'topRight', 'middleLeft', 'middleCenter', 'middleRight', 'bottomLeft', 'bottomCenter', 'bottomRight'],
                topLeft: {
                    X: false,
                    O: false,
                },
                topCenter: {
                    X: false,
                    O: false,
                },
                topRight: {
                    X: false,
                    O: false,
                },
                middleLeft: {
                    X: false,
                    O: false,
                },
                middleCenter: {
                    X: false,
                    O: false,
                },
                middleRight: {
                    X: false,
                    O: false,
                },
                bottomLeft: {
                    X: false,
                    O: false,
                },
                bottomCenter: {
                    X: false,
                    O: false,
                },
                bottomRight: {
                    X: false,
                    O: false,
                },
            })
            return (
                <div >
                    {this.state.boxes.map((info, i) => (
                        <span key={i}>
                            {this.renderSquares(info, i + 1)}
                        </span>
                    ))}
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                {this.state.flipper ? <h2>Player Two's Turn</h2> : <h2>Player One's Turn</h2>}
                {this.renderXO()}
            </div>
        );
    }
}

export default Grid;