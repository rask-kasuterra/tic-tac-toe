"use client"

import styles from "./page.module.css";
import React, { useState } from 'react';

export default function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [isEnd, setIsEnd] = useState(false);

  const handleClick = (index) => {
    if (cells[index] === '' && !isEnd) {
      const newCells = [...cells];
      newCells[index] = currentPlayer;
      setCells(newCells);

      if (checkEnd(newCells, currentPlayer)) {
        setIsEnd(true);
        alert(`Player ${currentPlayer} is winner.`);
      } else {
        setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
      }
    }
  };

  const checkEnd = (cells, player) => {
    // 勝利条件をチェックするロジックを実装
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some(combination =>
      combination.every(index => cells[index] === player)
    );
  };

  return (
    <div className="tic-tac-toe">
      {cells.map((cell, index) => (
        <div
          key={index}
          className="cell"
          onClick={() => handleClick(index)}
          style={styles.main}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};


// TODO List

// TypeScrip にする
// React にする
// NodeJS にする
// 例外処理いれる
// テストコード書く(UT)
// テスト検討する(ST)