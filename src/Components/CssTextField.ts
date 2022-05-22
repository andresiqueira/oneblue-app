import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#36a9e0"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#36a9e0"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#999"
    },
    "&:hover fieldset": {
      borderColor: "#333"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#36a9e0"
    }
  }
})

export default CssTextField