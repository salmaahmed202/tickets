import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";

import AttachIcon from "../assets/Attach.svg";
import TrashIcon from "../assets/Trash.svg";
import imageIcon from "../assets/rectangle.svg";

export default function NewMail() {
  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          New Mail
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Welcome to #1 ticket management platform in Egypt.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "700px" },
          margin: "20px auto",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          p: { xs: 2, sm: 3 },
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          label="To:"
          InputProps={{
            sx: {
              fontSize: "14px",
              height: "19px",
              p: "12px 8px",
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "12px",
            },
          }}
        />

        <TextField
          fullWidth
          variant="standard"
          label="Cc:"
          InputProps={{
            sx: {
              fontSize: "14px",
              height: "19px",
              p: "12px 8px",
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "12px",
            },
          }}
        />
        <TextField
          fullWidth
          variant="standard"
          label="Subject:"
          InputProps={{
            sx: {
              fontSize: "14px",
              height: "19px",
              p: "12px 8px",
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "12px",
            },
          }}
        />

  
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, 
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, justifyContent: { xs: "center", sm: "start" } }}>
            <IconButton>
              <img src={AttachIcon} alt="Attachfile" style={{ width: "28px", height: "28px" }} />
            </IconButton>
            <IconButton>
              <img src={imageIcon} alt="image" style={{ width: "20px", height: "28px" }} />
            </IconButton>
            <IconButton>
              <img src={TrashIcon} alt="Trash" style={{ width: "28px", height: "28px" }} />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#0060FF",
              px: { xs: 2, sm: 4 },
              borderRadius: "4px",
              textTransform: "none",
              alignSelf: { xs: "center", sm: "flex-end" },
              width: { xs: "100%", sm: "auto" }, 
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
