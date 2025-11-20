(function (React, designSystem) {
  'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  var React__default = /*#__PURE__*/_interopDefault(React);

  // ./components/Dashboard.jsx
  const Dashboard = props => {
    const {
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue
    } = props;
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      p: "xl"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, null, "Admin Dashboard"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Total Users: ", totalUsers), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Total Products: ", totalProducts), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Total Orders: ", totalOrders), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Total Revenue: $", totalRevenue));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Dashboard = Dashboard;

})(React, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3giLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEgyLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRvdGFsVXNlcnMsIHRvdGFsUHJvZHVjdHMsIHRvdGFsT3JkZXJzLCB0b3RhbFJldmVudWUgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBwPVwieGxcIj5cclxuICAgICAgPEgyPkFkbWluIERhc2hib2FyZDwvSDI+XHJcbiAgICAgIDxUZXh0PlRvdGFsIFVzZXJzOiB7dG90YWxVc2Vyc308L1RleHQ+XHJcbiAgICAgIDxUZXh0PlRvdGFsIFByb2R1Y3RzOiB7dG90YWxQcm9kdWN0c308L1RleHQ+XHJcbiAgICAgIDxUZXh0PlRvdGFsIE9yZGVyczoge3RvdGFsT3JkZXJzfTwvVGV4dD5cclxuICAgICAgPFRleHQ+VG90YWwgUmV2ZW51ZTogJHt0b3RhbFJldmVudWV9PC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9EYXNoYm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkRhc2hib2FyZCA9IERhc2hib2FyZCJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJwcm9wcyIsInRvdGFsVXNlcnMiLCJ0b3RhbFByb2R1Y3RzIiwidG90YWxPcmRlcnMiLCJ0b3RhbFJldmVudWUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJCb3giLCJwIiwiSDIiLCJUZXh0IiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0VBQUE7RUFJQSxNQUFNQSxTQUFTLEdBQUlDLEtBQUssSUFBSztJQUMzQixNQUFNO01BQUVDLFVBQVU7TUFBRUMsYUFBYTtNQUFFQyxXQUFXO0VBQUVDLElBQUFBO0VBQWEsR0FBQyxHQUFHSixLQUFLO0VBRXRFLEVBQUEsb0JBQ0VLLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ0MsZ0JBQUcsRUFBQTtFQUFDQyxJQUFBQSxDQUFDLEVBQUM7S0FBSSxlQUNUSCxzQkFBQSxDQUFBQyxhQUFBLENBQUNHLGVBQUUsUUFBQyxpQkFBbUIsQ0FBQyxlQUN4Qkosc0JBQUEsQ0FBQUMsYUFBQSxDQUFDSSxpQkFBSSxFQUFBLElBQUEsRUFBQyxlQUFhLEVBQUNULFVBQWlCLENBQUMsZUFDdENJLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ0ksaUJBQUksRUFBQSxJQUFBLEVBQUMsa0JBQWdCLEVBQUNSLGFBQW9CLENBQUMsZUFDNUNHLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ0ksaUJBQUksRUFBQSxJQUFBLEVBQUMsZ0JBQWMsRUFBQ1AsV0FBa0IsQ0FBQyxlQUN4Q0Usc0JBQUEsQ0FBQUMsYUFBQSxDQUFDSSxpQkFBSSxRQUFDLGtCQUFnQixFQUFDTixZQUFtQixDQUN2QyxDQUFDO0VBRVYsQ0FBQzs7RUNoQkRPLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHLEVBQUU7RUFFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDYixTQUFTLEdBQUdBLFNBQVM7Ozs7OzsifQ==
