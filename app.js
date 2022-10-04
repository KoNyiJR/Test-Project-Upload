var _0xbb20=['\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x6F\x72\x73\x2E\x63\x68\x61\x6E\x6C\x61\x79\x2E\x77\x6F\x72\x6B\x65\x72\x73\x2E\x64\x65\x76\x3F\x75\x3D','\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x69\x76\x65\x63\x68\x61\x6E\x6E\x65\x6C\x6D\x6D\x2E\x63\x6F\x6D\x2F\x31\x38\x38\x33\x2F\x6C\x6F\x63\x61\x6C\x2D\x64\x61\x74\x61\x2E\x74\x78\x74','\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x69\x76\x65\x63\x68\x61\x6E\x6E\x65\x6C\x6D\x6D\x2E\x63\x6F\x6D\x2F\x31\x38\x38\x33\x2F\x69\x6E\x63\x6C\x75\x64\x65\x2F\x6C\x69\x76\x65\x2D\x64\x61\x74\x61\x2E\x70\x68\x70','','\x4C\x69\x76\x65\x20\x55\x70\x64\x61\x74\x65\x64\x3A\x20','\x54','\x20','\x72\x65\x70\x6C\x61\x63\x65','\x73\x75\x62\x73\x74\x72','\x74\x6F\x49\x53\x4F\x53\x74\x72\x69\x6E\x67','\x67\x65\x74\x54\x69\x6D\x65','\x67\x65\x74\x54\x69\x6D\x65\x7A\x6F\x6E\x65\x4F\x66\x66\x73\x65\x74','\x6E\x6F\x77','\x74\x65\x78\x74','\x73\x70\x6C\x69\x74','\x6C\x65\x6E\x67\x74\x68','\x2C','\x70\x75\x73\x68','\x68\x74\x6D\x6C','\x23\x64\x61\x74\x61\x2D\x64\x61\x74\x65\x31','\x23\x64\x61\x74\x61\x2D\x64\x61\x74\x65\x32','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x32','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x32\x5F\x6B\x65\x79','\x23\x64\x61\x74\x61\x2D\x64\x61\x74\x65\x33','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x33','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x33\x5F\x6B\x65\x79','\x23\x64\x61\x74\x61\x2D\x64\x61\x74\x65\x34','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x34\x2D\x6D','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x34\x2D\x69','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x34\x2D\x6B\x65\x79','\x23\x64\x61\x74\x61\x2D\x64\x61\x74\x65\x35','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x35\x2D\x6D','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x35\x2D\x69','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x35\x2D\x6B\x65\x79','\x61\x6A\x61\x78','\x6A\x73\x6F\x6E','\x73\x65\x74','\x76\x61\x6C','\x6D\x6D\x32\x64\x31','\x6D\x6D\x32\x64\x32','\x66\x61\x64\x65\x49\x6E','\x23\x64\x61\x74\x61\x2D\x6D\x61\x69\x6E\x2D\x73\x65\x74','\x66\x61\x64\x65\x4F\x75\x74','\x23\x64\x61\x74\x61\x2D\x6D\x61\x69\x6E\x2D\x76\x61\x6C','\x23\x64\x61\x74\x61\x2D\x76\x61\x6C\x75\x65\x31','\x23\x73\x74\x6F\x63\x6B\x2D\x68\x65\x61\x64\x65\x72','\x64\x69\x73\x70\x6C\x61\x79','\x62\x6C\x6F\x63\x6B','\x63\x73\x73','\x72\x65\x61\x64\x79',]
const no_changes=_0xbb20[0]
const local_txt=_0xbb20[1]
const live_result=_0xbb20[2]
let config_data_file=`${_0xbb20[3]}${no_changes}${_0xbb20[3]}${local_txt}${_0xbb20[3]}`
let config_live_file=`${_0xbb20[3]}${no_changes}${_0xbb20[3]}${live_result}${_0xbb20[3]}`
let config_animation_duration=300
let config_refresh_frequency=3000
let config_live_counter=0
let config_fade_effect_counter=0
let initial_load=1
let default_duration=config_animation_duration
let local_loaded=0
let live_enabled=0
let live_load_counter=config_live_counter
let fade_effect=1
function loadData(){let _0xe806x11=[]
let _0xe806x12=0
let _0xe806x13,_0xe806x14,_0xe806x15,_0xe806x16
let _0xe806x17,_0xe806x18,_0xe806x19,_0xe806x1a,_0xe806x1b,_0xe806x1c
let _0xe806x1d,_0xe806x1e,_0xe806x1f,_0xe806x20,_0xe806x21,_0xe806x22
let _0xe806x23,_0xe806x24
config_animation_duration=default_duration
let _0xe806x25=_0xbb20[4]
_0xe806x25+=new Date(new Date()[_0xbb20[10]]()-new Date()[_0xbb20[11]]()*60*1000)
[_0xbb20[9]]()
[_0xbb20[8]](0,19)
[_0xbb20[7]](_0xbb20[5],_0xbb20[6])
if(config_fade_effect_counter==0){let _0xe806x26=new Date($[_0xbb20[12]]())
fade_effect=1
$[_0xbb20[34]]({url:config_data_file,dataType:_0xbb20[13],async:false,cache:false,success:function(_0xe806x27){let _0xe806x28=_0xe806x27[_0xbb20[14]](/\r?\n|\r/)
for(let _0xe806x29=0;_0xe806x29<_0xe806x28[_0xbb20[15]];_0xe806x29++){let _0xe806x2a=_0xe806x28[_0xe806x29][_0xbb20[14]](_0xbb20[16])
if(_0xe806x29==0){if(live_enabled==0&&_0xe806x2a[1]==1){live_load_counter=config_live_counter}
live_enabled=_0xe806x2a[1]}
if(_0xe806x29>1){_0xe806x11[_0xbb20[17]](_0xe806x2a)}}
_0xe806x17=_0xe806x11[0][1]
_0xe806x18=_0xe806x11[1][1]
_0xe806x19=_0xe806x11[2][1]
_0xe806x1a=_0xe806x25
_0xe806x1b=_0xe806x11[1][0]
_0xe806x1c=_0xe806x11[2][0]
_0xe806x1d=_0xe806x11[3][0]
_0xe806x1e=_0xe806x11[3][2]
_0xe806x1f=_0xe806x11[3][3]
local_value4_key=_0xe806x11[3][4]
_0xe806x20=_0xe806x11[4][0]
_0xe806x21=_0xe806x11[4][2]
_0xe806x22=_0xe806x11[4][3]
local_value5_key=_0xe806x11[4][4]
_0xe806x23=_0xe806x11[1][4]
_0xe806x24=_0xe806x11[2][4]
if(local_loaded==0||true){$(_0xbb20[19])[_0xbb20[18]](_0xe806x25)
$(_0xbb20[20])[_0xbb20[13]](_0xe806x1b)
$(_0xbb20[21])[_0xbb20[13]](_0xe806x18)
$(_0xbb20[22])[_0xbb20[13]](_0xe806x23)
$(_0xbb20[23])[_0xbb20[13]](_0xe806x1c)
$(_0xbb20[24])[_0xbb20[13]](_0xe806x19)
$(_0xbb20[25])[_0xbb20[13]](_0xe806x24)
$(_0xbb20[26])[_0xbb20[13]](_0xe806x1d)
$(_0xbb20[27])[_0xbb20[13]](_0xe806x1e)
$(_0xbb20[28])[_0xbb20[13]](_0xe806x1f)
$(_0xbb20[29])[_0xbb20[13]](local_value4_key)
$(_0xbb20[30])[_0xbb20[13]](_0xe806x20)
$(_0xbb20[31])[_0xbb20[13]](_0xe806x21)
$(_0xbb20[32])[_0xbb20[13]](_0xe806x22)
$(_0xbb20[33])[_0xbb20[13]](local_value5_key)}
local_loaded=1},})
if(live_enabled==1){if(live_load_counter>=config_live_counter){$[_0xbb20[34]]({url:config_live_file,dataType:_0xbb20[35],async:false,cache:false,success:function(_0xe806x27){_0xe806x13=_0xe806x27[_0xbb20[36]]
_0xe806x14=_0xe806x27[_0xbb20[37]]
_0xe806x15=_0xe806x27[_0xbb20[38]]
_0xe806x16=_0xe806x27[_0xbb20[39]]
_0xe806x17=_0xe806x15+_0xe806x16
_0xe806x12=1},})
live_load_counter=0}else{live_load_counter++}}}else{config_fade_effect_counter=0
fade_effect=0
$(_0xbb20[41])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[41])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[43])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[43])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[44])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[44])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[21])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[21])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[24])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[24])[_0xbb20[40]](config_animation_duration)})}
if(fade_effect==1){config_fade_effect_counter=1}
if(initial_load==0){default_duration=config_animation_duration
config_animation_duration=0}
if(_0xe806x12!=1&&local_loaded==1){if(live_enabled==1){$(_0xbb20[41])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[41])[_0xbb20[13]](_0xe806x13)
$(_0xbb20[41])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[43])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[43])[_0xbb20[13]](_0xe806x14)
$(_0xbb20[43])[_0xbb20[40]](config_animation_duration)})}else{$(_0xbb20[45])[_0xbb20[42]](config_animation_duration,function(){})}
$(_0xbb20[44])[_0xbb20[42]](config_animation_duration,function(){if(live_enabled!=1){$(_0xbb20[44])[_0xbb20[13]](_0xe806x17)}
$(_0xbb20[44])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[21])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[21])[_0xbb20[13]](_0xe806x18)
$(_0xbb20[21])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[24])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[24])[_0xbb20[13]](_0xe806x19)
$(_0xbb20[24])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[27])[_0xbb20[13]](_0xe806x1e)
$(_0xbb20[28])[_0xbb20[13]](_0xe806x1f)
$(_0xbb20[31])[_0xbb20[13]](_0xe806x21)
$(_0xbb20[32])[_0xbb20[13]](_0xe806x22)}else{if(_0xe806x12==1||config_fade_effect_counter){$(_0xbb20[45])[_0xbb20[48]](_0xbb20[46],_0xbb20[47])
$(_0xbb20[41])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[41])[_0xbb20[13]](_0xe806x13)
$(_0xbb20[41])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[43])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[43])[_0xbb20[13]](_0xe806x14)
$(_0xbb20[43])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[44])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[44])[_0xbb20[13]](_0xe806x15+_0xe806x16)
$(_0xbb20[44])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[21])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[21])[_0xbb20[13]](_0xe806x18)
$(_0xbb20[21])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[24])[_0xbb20[42]](config_animation_duration,function(){$(_0xbb20[24])[_0xbb20[13]](_0xe806x19)
$(_0xbb20[24])[_0xbb20[40]](config_animation_duration)})
$(_0xbb20[27])[_0xbb20[13]](_0xe806x1e)
$(_0xbb20[28])[_0xbb20[13]](_0xe806x1f)
$(_0xbb20[31])[_0xbb20[13]](_0xe806x21)
$(_0xbb20[32])[_0xbb20[13]](_0xe806x22)}}
initial_load=1}
$(document)[_0xbb20[49]](function(){loadData()
setInterval(function(){loadData()},config_refresh_frequency)})
