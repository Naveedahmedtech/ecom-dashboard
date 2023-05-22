import { Grid, Typography, Box } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LineChart from "./LineChart/LineChart";
import PieChart from "./PieChart/PieChart";
import './styles.css'
const Dashboard = () => {
  return (
    <>
      <main className="pdt-3 main-content-margin">
        <div>
          <Typography gutterBottom variant="h4" fontWeight="bold">
            Dashboard
          </Typography>
        </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box className="flex wrap align-items-center justify-between bg-black rounded pd-2">
              <div>
                <InsertChartIcon sx={{ color: "white", fontSize: "50px" }} />
              </div>
              <div className="ml-1">
                <Typography color="white">Sales</Typography>
                <Typography variant="h5" color="white">
                  $1250.00
                </Typography>
              </div>
              <div className="ml-1">
                <Typography className="c-green">+15% </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box className="flex wrap align-items-center justify-between bg-black rounded pd-2">
              <div>
                <InsertChartIcon sx={{ color: "white", fontSize: "50px" }} />
              </div>
              <div className="ml-1">
                <Typography color="white">Sales</Typography>
                <Typography variant="h5" color="white">
                  $1250.00
                </Typography>
              </div>
              <div className="ml-1">
                <Typography className="c-green">+15% </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box className="flex wrap align-items-center justify-between bg-black rounded pd-2">
              <div>
                <InsertChartIcon sx={{ color: "white", fontSize: "50px" }} />
              </div>
              <div className="ml-1">
                <Typography color="white">Sales</Typography>
                <Typography variant="h5" color="white">
                  $1250.00
                </Typography>
              </div>
              <div className="ml-1">
                <Typography className="c-green">+15% </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box className="flex wrap align-items-center justify-between bg-black rounded pd-2">
              <div>
                <InsertChartIcon sx={{ color: "white", fontSize: "50px" }} />
              </div>
              <div className="ml-1">
                <Typography color="white">Sales</Typography>
                <Typography variant="h5" color="white">
                  $1250.00
                </Typography>
              </div>
              <div className="ml-1">
                <Typography className="c-green">+15% </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="my-5 hidden-y felx"
        >
          <Grid item xs={12} sm={12} md={6} sx={{ boxShadow: '12px 12px 12px 12px solid black' }}>
            <Typography sx={{marginLeft: '20px', marginTop: '20px'}}>Sales Revenue</Typography>
            <LineChart />
          </Grid>
          <div className="grow"></div>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{ marginRight: "5px", border: "1px solid black" }}
          >
            <Typography sx={{marginLeft: '20px', marginTop: '20px'}}>Channels</Typography>
            <PieChart />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Dashboard;
