import React from "react";
import { useSelector } from "react-redux";
import { FeaturedInfos, Chart, WidgetSm, WidgetLg } from "../../Imports/Index";
import { HomeAdmins } from "../../Styles/StylePages/Admin/HomeAdmin";
import { userData } from "../../utils/DataChart";
const HomeAdmin = () => {
  const { moth } = useSelector((state) => state.products);
  return (
    <>
      <HomeAdmins />
      <div className="home">
        <FeaturedInfos />
        <Chart
          data={moth}
          title="Revenue Every Month"
          grid
          dataKey="doanh_thu"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
