import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Portlet from 'components/Portlet';
import Table from 'components/Table';
import Form from 'components/Form';
import Input from 'components/Input';
import Label from 'components/Label';
import Button from 'components/Button';
import Icon from 'components/Icon';

class Crossing extends Component {
  render() {
    return (
      <Portlet title="过站作费管理" subTitle="自定义查询" icon="list" color="font-green-sharp">
        <Form className="form-horizontal">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <Label htmlFor="month" className="col-md-4">月 份</Label>
                <div className="col-md-8">
                  <Input type="text" id="month" placeholder="请输入月份" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <Label htmlFor="month" className="col-md-4">备件描述</Label>
                <div className="col-md-8">
                  <Input type="text" id="month" placeholder="请输入备件描述" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <Label htmlFor="month" className="col-md-4">计费类型</Label>
                <div className="col-md-8">
                  <select className="form-control">
                    <option>全 部</option>
                    <option>计费</option>
                    <option>不计费</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <Label htmlFor="month" className="col-md-4">月 份</Label>
                <div className="col-md-8">
                  <Input type="text" id="month" placeholder="请输入月份" />
                </div>
              </div>
            </div>
            <div className="col-md-12 text-right">
              <Button type="reset" className="btn-default">
                <Icon type="mail-reply" /> 重 置
              </Button>
              <Button type="button" className="blue" onClick={this.handleRefreshClick}>
                <Icon type="search" /> 查 询
              </Button>
            </div>
          </div>
        </Form>
        <Table className="table table-striped table-bordered table-advance table-hover">
          <thead>
            <tr>
              <th>
                结算单位
              </th>
              <th className="hidden-xs">
                发货部门
              </th>
              <th>
                收货部门
              </th>
              <th>
                网点代码
              </th>
              <th>
                订单编码
              </th>
              <th>
                备件代码
              </th>
              <th>
                备件描述
              </th>
              <th>
                箱 码
              </th>
              <th>
                结算金额
              </th>
              <th>
                发运时间
              </th>
              <th>
                接收时间
              </th>
              <th>
                成本单位
              </th>
              <th>
                操 作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="13" className="text-center">
                暂无数据
              </td>
            </tr>
          </tbody>
        </Table>
      </Portlet>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.dispatch };
}

Crossing.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Crossing);
