import React,{Fragment,useState} from 'react'
import Breadcrumb from '../../../common/breadcrumb'

import { Home, Activity, Users } from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import Settings from './settings';
import SendSetting from './send-settings';

const EmailSettings =()=> {
    return (
        <Fragment>            
            <div className="container-fluid">
                    <div className="row theme-tab">
                        <Tabs className="col-sm-12">
                            <TabList className="tabs tab-title m-t-45 justify-content-md-center">
                                <Tab className="current">
                                    <Home />Templates
                                </Tab>
                                <Tab>
                                    <Activity />Settings
                                </Tab>
                                <Tab>
                                    <Activity />Send or schedule
                                </Tab>

                            </TabList>
                            <div className="tab-content-cls">
                                <TabPanel>
                                    {/* <HomeComponent /> */}
                                </TabPanel>
                                <TabPanel>
                                    <Settings/>
                                </TabPanel>
                                <TabPanel>
                                    <SendSetting/>
                                </TabPanel>

                            </div>
                        </Tabs>
                    </div>
                </div>
        </Fragment>
    )
}

export default EmailSettings
