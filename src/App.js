import "./App.css";
import { Box, Button, useTheme } from "@mui/material";
import "./styles/styles.css";

function App() {
  const theme = useTheme();
  console.log(theme, "theme");

  return (
    <div className="App">
      <Box>
        <input />
        {/* color={theme.styles.entities[15]?.value} */}
        <Button>click</Button>
        <Button>click</Button>
        <Button>click</Button>
        {/* <Button sx={{ background: `${theme.styles.entities[55]?.value}` }}>
          click
        </Button>
        <Button sx={{ background: `${theme.styles.entities[105]?.value}` }}>
          click
        </Button>
        <Button sx={{ background: `${theme.styles.entities[115]?.value}` }}>
          click
        </Button> */}
      </Box>
    </div>
  );
}

export default App;
