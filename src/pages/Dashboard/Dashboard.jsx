import { Grid, Typography, Box, Button } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LineChart from "./Charts/LineChart/LineChart";
import PieChart from "./Charts/PieChart/PieChart";
import BarChart from "./Charts/BarChart/BarChart";
import CountryTable from './Table/CountryTable'
import TopProducts from "./TopProducts/TopProducts";
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
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ boxShadow: "12px 12px 12px 12px solid black" }}
          >
            <Typography variant="h5" sx={{ marginTop: "20px" }}>
              Sales Revenue
            </Typography>
            <LineChart />
          </Grid>
          <div className="grow"></div>
          <Grid item xs={12} sm={12} md={5} sx={{ marginRight: "5px" }}>
            <Typography variant="h5" sx={{ marginTop: "20px" }}>
              Channels
            </Typography>
            <PieChart />
            <Typography>
              More than 1,200,000 developers used Creative Tim's products and
              over 700,000 projects were created.
              <Button variant="contained" size="small">
                Read more
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className="my-5">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ boxShadow: "12px 12px 12px 12px solid black" }}
          >
            <Typography variant="h5" sx={{ marginBottom: "20px" }}>
              Sales by age
            </Typography>
            <BarChart />
          </Grid>
          <div className="grow"></div>
          <Grid item xs={12} sm={12} md={5} sx={{ marginRight: "5px" }}>
            <Typography variant="h5" sx={{ marginBottom: "20px" }}>
              Sales by country
            </Typography>
            <CountryTable />
          </Grid>
        </Grid>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className="my-5">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{ boxShadow: "12px 12px 12px 12px solid black" }}
          >
            <Typography variant="h5">Top Products</Typography>
            <TopProducts />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Dashboard;
