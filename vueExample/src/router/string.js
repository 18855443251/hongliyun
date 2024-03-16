//发现首页功能选择频道页
const indexOf1 = () => import( /* webpackChunkName: "string" */ "@/views/string/indexOf1");
const indexOf2 = () => import( /* webpackChunkName: "string" */ "@/views/string/indexOf2");
const indexOf3 = () => import( /* webpackChunkName: "string" */ "@/views/string/indexOf3");
const match1 = () => import( /* webpackChunkName: "string" */ "@/views/string/match1");
const instanceof1 = () => import( /* webpackChunkName: "string" */ "@/views/string/instanceof1");
const prototype = () => import( /* webpackChunkName: "string" */ "@/views/string/prototype");
const prototype1 = () => import( /* webpackChunkName: "string" */ "@/views/string/prototype1");
const prototype2 = () => import( /* webpackChunkName: "string" */ "@/views/string/prototype2");
export default [{
  name: "indexOf1",
  path: "/indexOf1",
  component: indexOf1,
}, {
  name: "indexOf2",
  path: "/indexOf2",
  component: indexOf2,
}, 
{
  name: "indexOf3",
  path: "/indexOf3",
  component: indexOf3,
}, {
  name: "match1",
  path: "/match1",
  component: match1,
}, 
{
  name: "instanceof1",
  path: "/instanceof1",
  component: instanceof1,
},
{
  name: "prototype",
  path: "/prototype",
  component: prototype,
},
{
  name: "prototype1",
  path: "/prototype1",
  component: prototype1,
},
{
  name: "prototype2",
  path: "/prototype2",
  component: prototype2,
}]
