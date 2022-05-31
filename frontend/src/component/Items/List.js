import React, { Component } from "react";
import Navbar from "./../NavigasiBar";
import config from "./../../config/config.json";
import $ from "jquery";

export default class List extends Component {
  componentDidMount() {
    document.title = "Items";
    this.load_data();
  }

  load_data() {
    $("#div_nya").html("");
    $("#div_loading").show();

    $.ajax({
      url: config.api_url + "item/get_item_brand",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      method: "POST",
      data: {},
      cache: false,
      success: function (respone) {
        var datanya = respone.data;
        var html = "";
        for (var key in datanya) {
          html +=
            '<div class=" col-md-2 col-6"><div class="card m-1 p-3 shadow p-3 mb-5 bg-white rounded cursor_pointer"><img src="' +
            config.api_url +
            datanya[key].logo +
            '" width="100%">';
          html +=
            '<br /><center><span className="fw-200">' +
            datanya[key].name +
            "</span></center>";
          html += "</div></div><br>";
        }
        $("#div_nya").append(html);
        $("#div_loading").hide();
      },
      error: function (error) {
        console.log(error.responseJSON.message);
      },
      timeout: 10000,
    });
  }

  shimmer() {
    var indents = [];
    for (var i = 0; i < 12; i++) {
      indents.push(
        <div className="col-md-2 col-6" key={i}>
          <div className="card m-1 p-3 shadow p-3 mb-5 bg-white rounded cursor_pointer height_200">
            <div className="animate height_100"></div>
            <br />
            <center>
              <div className="comment animate height_10 width_100"></div>
            </center>
          </div>
        </div>
      );
    }
    return indents;
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h4 className="mt-4">Items</h4>
          <center>
            <br />
            <button
              className="btn btn-light w-100"
              onClick={() => this.load_data()}
            >
              RELOAD
            </button>
            <br />
            <br />
          </center>
          <div className="row" id="div_loading">
            {this.shimmer()}
          </div>
          <div className="row" id="div_nya"></div>
        </div>
      </div>
    );
  }
}
