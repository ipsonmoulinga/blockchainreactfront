import {
  Grid, TextField, withStyles,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React, { ReactElement } from 'react';
import './Mock.css';

// const CssTextField = withStyles({
//   root: {
//     color: 'red',
//     '& label.Mui-focused': {
//       color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'red',
//       },
//       '&:hover fieldset': {
//         borderColor: 'yellow',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'green',
//       },
//     },
//   },
// })(TextField);
const gridStyle = {
  backgroundColor: 'red',
  width: '80%',
  borderBottom: 'solid',
  borderBottomColor: 'blue',
};
const StyledTextField = withStyles((theme) => ({
  root: {
    width: 300,
    '& .MuiInputBase-root': {
      color: theme.palette.secondary.main,
    },
  },
}))(TextField);
const Mock = () : ReactElement => (
    <div>
        <div>
        <Grid container style={gridStyle} spacing={1} alignItems="flex-end">
          <Grid item>
            <ExpandMore />
          </Grid>
          <Grid item>
            <StyledTextField
              label="Ecris ton mail"
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ style: { color: 'yellow' } }}/>
          </Grid>
          <Grid item>
            <ExpandMore />
          </Grid>
        </Grid>
      </div>
      <TextField
            label="input label name here"
            margin="normal"
            inputProps={{ style: { fontSize: 40 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 40, color: 'green' } }} // font size of input label
        />
    </div>
);
export default Mock;
