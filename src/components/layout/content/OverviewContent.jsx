import OverviewChart from "../../shared/charts/overviewChart";
import SummaryChart from "../../shared/charts/summaryChart";
import data from "../../../assets/data";
import _root from "../../_root";

function OverviewContent() {
  return (
    <_root>
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
    </_root>
  );
}

export default OverviewContent;

/**
 * Create a page folder for SASS
 * Change the class name for suitable SASS
 * Transfer all the code to Overview Page
 * The reason is to make it easier for Routing
 *
 */
