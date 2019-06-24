import React, { Component } from 'react';
import './Grid.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




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
        let winnerIndex = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
        let winnerArr = [];


        for (let j = 0; j < winnerIndex.length; j++) {

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
                    }
                }
                else {
                    winnerArr = [];
                }

            }
            winnerArr = [];
        }

        for (let x = 0; x < boxes.length; x++) {
            console.log('this.state[boxes]', this.state[boxes[x]]);
            let check = this.state[boxes[x]];
            if (check.X === true || check.O === true) {
                winnerArr.push('check');
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

    renderXO = (winner = false) => {
        if (winner === false) {
            this.findWinner()
            return (
                <div >
                    <br />
                    {this.state.boxes.map((info, i) => (
                        this.renderSquares(info, i + 1)
                    ))}
                </div>
            )
        } else if (winner === true) {
            this.setState({
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
            })
            return (
                <div >
                    <br />
                    {this.state.boxes.map((info, i) => (
                        this.renderSquares(info, i + 1)
                    ))}
                </div>
            )
        }
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