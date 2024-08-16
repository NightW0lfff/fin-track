import OverviewChart from "../components/shared/charts/OverviewChart";
import SummaryChart from "../components/shared/charts/SummaryChart";
import data from "../assets/data/data";
import List from "../components/shared/list/MenuList";
import MainLayout from "../components/layout/MainLayout";

function Overview() {
  return (
    <MainLayout title="Overview">
      <div className="overview__summary">
        <div className="overview__summary--overview card">
          <OverviewChart />
        </div>
        <div className="overview__summary--detailedSummary card">
          <div className="overview__summary--detailedSummary-title">
            Summary
          </div>
          <div className="overview__summary--detailedSummary-uptodate">
            {data[1].datasets[0].startDate} - now
          </div>
          <SummaryChart />
        </div>
      </div>

      <div className="overview__updates card">
        <h3 className="overview__updates--title">Recent Updates</h3>
        <div className="overview__updates--container">
          <div className="overview__updates--item">
            <List />
          </div>
        </div>
      </div>

      <div className="overview__visualisedInfo">
        <div className="overview__visualisedInfo--chart card"></div>
      </div>
    </MainLayout>
  );
}

export default Overview;
