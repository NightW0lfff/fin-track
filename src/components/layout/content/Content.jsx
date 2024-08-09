import OverviewChart from "../../shared/charts/overviewChart";
import SummaryChart from "../../shared/charts/summaryChart";
import data from "../../../assets/data";

function Content() {
  return (
    <div className="content">
      <div className="content__layout">
        <div className="content__header">
          <div className="content__header--title">Title</div>
          <div className="content__header--overview">Overview</div>
        </div>
        <div className="content__container">
          <div className="content__visualisedInfo">
            <div className="content__visualisedInfo--chart">
              <OverviewChart />
            </div>
            <div className="content__visualisedInfo--detailSummary">
              <div className="content__visualisedInfo--detailSummary-title">
                Summary
              </div>
              <div className="content__visualisedInfo--detailSummary-uptodate">
                {data[1].datasets[0].startDate} - now
              </div>
              <SummaryChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
