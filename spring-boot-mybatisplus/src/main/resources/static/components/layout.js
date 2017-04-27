"use strict";

Vue.component('my-layout', {
	  template: multiline(function() {
		  /*!@preserve
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-2" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                导航一
                            </template>
                            <Menu-item name="1-1">选项 1</Menu-item>
                            <Menu-item name="1-2">选项 2</Menu-item>
                            <Menu-item name="1-3">选项 3</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                导航三
                            </template>
                            <Menu-item name="3-1">选项 1</Menu-item>
                            <Menu-item name="3-2">选项 2</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">内容区域</div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
	  */})
});