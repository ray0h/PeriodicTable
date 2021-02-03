import React from 'react';
import Box from './box';
import elements from './elements';
import dataset from './dataset';

const Table = () => {
  const p_one_ids = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
  const p_two_ids = [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10]
  const p_three_ids = [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18]
  const p_four_ids = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
  const p_five_ids = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54]
  const p_six_ids = [55, 56, 0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86]
  const p_seven_ids = [87, 88, 0, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118]
  const row_eight_ids = [0, 0, 0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
  const row_nine_ids = [0, 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]

  return (
    <div className="table">
      <div className="period">
        {p_one_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      <div className="period">
        {p_two_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      <div className="period">
        {p_three_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      <div className="period">
        {p_four_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      <div className="period">
        {p_five_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      <div className="period">
        {p_six_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      <div className="period" style={ { marginBottom: 10 } }>
        {p_seven_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      <div className="period">
        {row_eight_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      <div className="period" style={ { marginBottom: 20 } }>
        {row_nine_ids.map(id => {
          let element = elements.filter(element => element.id === id);
          let data = dataset.filter(data => data.id === id);
          return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
        })}
      </div>
      
    </div>
  )
};

export default Table;
