/**
 * @file routes
 * @author junmer
 */

import Main from './Main';
import Button from './Button.san';
import TextField from './TextField.san';
import Menu from './Menu.san';
import Tabs from './Tabs.san';
import Pagination from './Pagination.san';
import Popover from './Popover.san';
import Drawer from './Drawer.san';
import Dialog from './Dialog.san';
import Progress from './Progress.san';
import DatePicker from './DatePicker.san';
import Table from './Table.san';
import Ripple from './Ripple.san';
import Icon from './Icon.san';
import Checkbox from './Checkbox.san';
import Switch from './Switch.san';
import Radio from './Radio.san';
import ExpansionPanel from './ExpansionPanel.san';

let routes = {
    '/': Main,
    '/button': Button,
    '/textfield': TextField,
    '/menu': Menu,
    '/tabs': Tabs,
    '/pagination': Pagination,
    '/popover': Popover,
    '/drawer': Drawer,
    '/progress': Progress,
    '/datepicker': DatePicker,
    '/dialog': Dialog,
    '/table': Table,
    '/ripple': Ripple,
    '/Icon': Icon,
    '/Checkbox': Checkbox,
    '/Radio': Radio,
    '/Switch': Switch,
    '/ExpansionPanel': ExpansionPanel
};

export default routes;