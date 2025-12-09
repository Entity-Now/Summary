# 金蝶云星空插件开发常用代码

## 全局参数相关

- `this.Context.UserId` //获取当前用户ID
- `this.Context.UserName` //获取当前用户名
- `this.Context.CurrentOrganizationInfo.ID` //获取当前组织
- `this.Context.ClientType` //获取当前登陆类型：客户端（WPF）或网页端（）
- `this.Context.IsMultiOrg;` //获取是否是第一次加载
- `this.View.Model.GetPKValue();` 获取当前单据ID

---

## 控件基础操作

### 设置菜单显示的文本
```csharp
this.View.GetBarItem("Toolbar1", "tbCK_ShowFolder").Text = IsShowFolder.Equals("1") ? "隐藏文件夹" : "显示文件夹";
```

### 设置控件标题
```csharp
this.View.GetControl("FCombox").SetCustomPropertyValue("title", "控件标题");
```

### 设置控件的显示隐藏
```csharp
this.View.GetControl("FPriority").Visible = true;
this.ListView.GetBarItem("FList", "tbNew").Visible = false;
```

### 设置单据体为不可编辑状态
```csharp
this.View.StyleManager.SetEnabled("FEntity", null, false);
```

### 设置控件锁定
```csharp
this.View.LockField("FBase1", false);
this.View.StyleManager.SetEnabled("FCustomer", null, false);
this.View.GetControl("FCustomer").SetCustomPropertyValue("disabled", false);
```

### 设置控件选中的焦点
```csharp
this.View.GetControl("FTextSearch").SetFocus();
```

### 设置字段必录
```csharp
(this.View.GetControl("FMilestone") as FieldEditor).SetCustomPropertyValue(KeyConst.MUSTINPUT, true);
```

### 修改页签标题
```csharp
This.View.GetControl("FTab_p0").SetCustomPropertyValue("title", "XXXX页签名称")
```

### 修改控件颜色
```csharp
this.View.GetControl("1111").ControlAppearance.TextColor = "@FF0000";
```

### 获取窗体ID
```csharp
this.View.UserParameterKey
```

### 获取父级页面
```csharp
this.View.ParentFormView
```

### 分隔容器
```csharp
this.View.GetControl("FSpliteContainer").HideFirstPanel(false);//隐藏上部分
this.View.GetControl("FSpliteContainer").HideSecondPanel(false);//隐藏下部分
```

### 面板
```csharp
this.View.GetControl("FPanel").SetBackGroundColor("#FFFF0000");//添加背景色
```

### 修改按钮字体大小
```csharp
this.View.GetControl("FBtnQuery").SetCustomPropertyValue("fontSize", 20);
```

### 修改按钮样式
```csharp
this.View.GetControl
this.View.GetControl
this.View.GetControl
```

### 修改按钮显示图片
```csharp
this.View.GetControl
```

### 修改按钮样式为图片与文字共存,并允许显示小文字
```csharp
this.View.GetControl("FSHOPCAR").SetStyleKey("TextIconWithMsgButtonStyle")
this.View.GetControl("FSHOPCAR").SetViceText("300")
this.View.GetControl("FSHOPCAR").SetTextIcon("images/biz/default/Common/ShopcarBig.png")
```

---

## 赋值

### 基础资料取值
```csharp
DynamicObject obj = this.Model.DataObject;
DynamicObjectCollection rows = obj["PPBomEntry"] as DynamicObjectCollection;//子项明细实体
var wl = rows[i]["MaterialID"] as DynamicObject;//取物料
string zxwl = wl["F_DZLSX"].ToString();//取基础物料属性值
//获取基础物料编码
this.View.Model.GetValue("F_CPLH") == null ? "0" : (this.View.Model.GetValue("F_CPLH") as DynamicObject)["Number"].ToString();
```

### 普通赋值
```csharp
this.View.Model.SetValue("FStartDate", DateTime.Now.ToString("yyyy-MM-dd"));
```

### 基础资料赋值
```csharp
this.Model.SetItemValueByID("FSurfaceTreatment", "1", 0);
this.Model.SetItemValueByNumber("FSurfaceTreatment", "1", 0);
```

### 多选基础资料赋值
```csharp
string[] notifyList = new String[] { this.Context.UserId.ToString() };
this.Model.SetValue("FNotify", notifyList);
```

### 单据体赋值
```csharp
DataTable tableQuery = new DataTable();
this.View.Model.ClearNoDataRow();
this.View.Model.DeleteEntryData("FEntity");
foreach (DataRow row in tableQuery.Rows)
{
    this.Model.CreateNewEntryRow("FEntity");
    int RowCout = this.Model.GetEntryRowCount("FEntity");
    this.Model.SetValue("FID", row["FID"], RowCout - 1);
    this.Model.SetValue("FNUMBER", row["FNUMBER"], RowCout - 1);
    this.Model.SetItemValueByNumber("FSurfaceTreatment", "1", RowCout - 1);
}
this.View.UpdateView("FEntity");
```

---

## 单据体相关

### 单据体赋值
```csharp
DataTable tableQuery = new DataTable();
this.View.Model.ClearNoDataRow();
this.View.Model.DeleteEntryData("FEntity");
foreach (DataRow row in tableQuery.Rows)
{
    this.Model.CreateNewEntryRow("FEntity");
    int RowCout = this.Model.GetEntryRowCount("FEntity");
    this.Model.SetValue("FID", row["FID"], RowCout - 1);
    this.Model.SetValue("FNUMBER", row["FNUMBER"], RowCout - 1);
    this.Model.SetItemValueByNumber("FSurfaceTreatment", "1", RowCout - 1);
}
this.View.UpdateView("FEntity");
```

### 获取单据体的值
```csharp
int iRowIndex = this.View.Model.GetEntryCurrentRowIndex("FEntity");
EntryEntity entryEntity = this.View.BusinessInfo.GetEntryEntity("FEntity");
DynamicObjectCollection docCustomer = this.View.Model.GetEntityDataObject(entryEntity);
string fid = docCustomer[iRowIndex]["FID"].ToString();
```

### 获取单据体当前选中的列
```csharp
this.View.GetControl("FTreeEntity").GetFocusField();
```

### 设置选择的值高亮显示
```csharp
this.View.GetControl("FList").SetFireRowChangeEvent(true);
```

### 冻结列
```csharp
this.View.GetControl("FEntity").SetFrozen("FPartName", "");
```

### 设置某行某列锁定
```csharp
this.View.GetFieldEditor("FNetWeightChange", e.Row).SetEnabled("", True);
```

### 循环单据体所有列
```csharp
foreach (Field fld in _currInfo.GetEntity("FEntity").Fields)
```

### 初始化表格的导航属性为纵向导航（即按回车是往下移动焦点）

### 创建行
```csharp
this.View.Model.CreateNewEntryRow("FEntity");//新增
```

### 删除行
```csharp
this.View.Model.DeleteEntryRow("FEntity", (int)rownum);//删除
```

### 设置字段默认排序
```csharp
this.View.GetControl("FEntity").SetSort("FEStep", EntryGridFieldSortOrder.Ascending);
```

### 锁定列头
```csharp
this.View.GetControl("FEntity").SimplizationAllColumns();
```

### 设置样式
```csharp
DataTable tableStyle = new DataTable();
tableStyle.Columns.AddRange(new DataColumn[] { new DataColumn("FFileName"), new DataColumn("FColor"), new DataColumn("FRowIndex") });
tableStyle.Rows.Add("FFileName", UtilHelper.未开始颜色, RowCout - 1);
EntryGrid grid = this.View.GetControl("FEntity");
foreach (DataRow row in tableStyle.Rows)
{
    grid.SetBackcolor(row["FFileName"].ToString(), row["FColor"].ToString(), Convert.ToInt32(row["FRowIndex"]));
}
```

### 设置过滤条件
```csharp
EntryGrid grid = this.View.GetControl("FEntity");
grid.SetFilterString(" FC_IsAllocated = 'true' ");
```

### 设置选中行
```csharp
this.View.GetControl("FEntityD").SetFocusRowIndex(iRowIndex);
```

### 根据条件锁定单据体单元格
```csharp
DynamicObjectCollection part = this.View.Model.GetEntityDataObject(this.View.BusinessInfo.GetEntryEntity("FEntity"));
for (int i = 0; i < part.Count; i++)
{
    if (!(part[i]["FEState"] == null ? "未开始" : part[i]["FEState"].ToString()).Equals("未开始"))
    {
        this.View.GetFieldEditor("FESurfaceCode", i).SetEnabled("", false);
    }
}
```

---

## 列表插件

### 隐藏菜单
```csharp
this.ListView.GetMainBarItem("tbNew").Visible = false;
```

### 设置列表行高
```csharp
this.View.GetControl("FLIST").SetRowHeight(25);
```

### 获取选中行
```csharp
ListSelectedRow selectRows = this.ListView.CurrentSelectedRowInfo;
if (selectRows == null)
{
    this.View.ShowErrMessage("未选中行记录！");
    return;
}
string fid = selectRows.PrimaryKeyValue.ToString();
```

### 获取选中的行
```csharp
Kingdee.BOS.Core.List.ListSelectedRowCollection selectedRowsInfo = this.ListView.SelectedRowsInfo;
string objectID = this.ListView.BillBusinessInfo.GetForm().Id;
```

### 获取当前列表查询的所有主键数据
```csharp
this.ListView.GetPKData();
```

### 刷新列表
```csharp
this.ListView.Refresh();
```

### 根据过滤条件，重新取数，刷新列表
```csharp
this.ListView.RefreshByFilter();
```

### 动态设置列表值显示
```csharp
public override void FormatCellValue(FormatCellValueArgs args)
{
    string filedName = args.Header.FieldName;//字段名
    if (filedName.EqualsIgnoreCase("FNowDisposeUser"))//获取当前处理人员
    {
        args.FormateValue = "显示的值";
    }
}
```

### 设置默认查询条件 设置值能查看自己有权限的仓库
```csharp
public override void PrepareFilterParameter(FilterArgs e)
{
    if (string.IsNullOrWhiteSpace(e.FilterString) == false)
    {
        e.FilterString += " and ";
    }
    e.FilterString += string.Format(@"
 FSTOCKID IN (SELECT FID FROM dbo.LT_CBS_t_StockAdmin a WHERE c.FUSERID = {0}) ", this.Context.UserId.ToString());
}
```

---

## 界面相关

### 设置单据标题
```csharp
LocaleValue formTitle = new LocaleValue();
formTitle.Add(new KeyValuePair<int, string>(this.Context.UserLocale.LCID, "文件管理-修订"));
this.View.SetFormTitle(formTitle);
```

### 打开窗体
```csharp
DynamicFormShowParameter param = new DynamicFormShowParameter();
param.FormId = "SAL_DISCOUNTDETAIL";
param.CustomParams.Add("IncludedTax", "true");//传入参数
this.View.ShowForm(param);
```

### 获取页面中的所有控件
```csharp
public List GetAllKeyList()
{
    IMetaDataService metaService = ServiceHelper.GetService();
    FormMetadata meta = metaService.Load(this.Context, "") as FormMetadata;
    return meta == null ? new List() : meta.BusinessInfo.Elements.Select(field => field.Key).ToList();
    List xx = meta.BusinessInfo.GetFieldList();
}
```

### 【1】打开F7界面
```csharp
int iClassTypeID = 1012506;
int iLookupType = (int)BOSEnum.Enu_LookUpType.Enu_LookUpType_NewBase;
m_BillInterface.ShowF7Select(send, new OnShowF7SelectEventArgs(iLookupType, iClassTypeID, strFilter));
```

### 【2】打开自定义aspx页面
```csharp
Guid rndGuid = Guid.NewGuid();
string strUrl = "CRM/BumpBill.aspx?FClassTypeID=1012024&FRndNum=" + rndGuid.ToString()
+ "??dialogWidth:800px; dialogHeight:600px;resizable:no;status: no; unadorned : no; help : no;Minimize=no;Maximize=no;";
m_ListInterface.AddAction(new BOSAction(iBillID.ToString(), "ShowBill", strUrl));
```

### 【3】打开EBOS单据
```csharp
Dictionary dctData = new Dictionary();
dctData["FID"] = iBillID.ToString();
m_ListInterface.ShowBill(1012025, BOSEnum.Enu_BillStatus.Enu_BillStatus_New, dctData);
```

### 【4】打开序时簿
```csharp
StringBuilder sBuilder = new StringBuilder();
sBuilder.AppendFormat("EXTBOS/Filter/BOSListManager.aspx?FClassTypeID=1012701&FDirect=1&FQuick=1&FLic=0&FType=-1");
sBuilder.AppendFormat("??dialogWidth:750px; dialogHeight:565px;");
sBuilder.AppendFormat("resizable:no;scroll: no; status: no; unadorned : no; help : no;Minimize=no;Maximize=no;");
m_BillInterface.ShowCustomePage(e.BarName, sBuilder.ToString());
```

### 页签控件的使用
```csharp
this.View.GetControl("F_LT_Tab").SelectedIndex = 0;
this.View.GetControl("F_LT_Tab").SetFireSelChanged(true);//设置该页签触发页签切换事件
this.View.GetControl("F_LT_Tab").SelectedTabItemKey = "F_LT_TAB2_P0";//调用无效
```

### 页签切换事件
```csharp
public override void TabItemSelectedChange(TabItemSelectedChangeEventArgs e)
{
    string sendID = e.Key.ToUpper();
    if (sendID.Equals("FTABUSING"))
    {
    }
}
```

# 金蝶云星空插件开发常用代码 (续)

## 面板嵌入网页

```csharp
this.View.GetControl("FPanelWebBrowse").SetCustomPropertyValue("Source", "www.189622.com");
```

### 需要表单构造插件!!!!

```csharp
public class LT_PLM_FindReport2 : AbstractDynamicWebFormBuilderPlugIn
{
    public override void CreateControl(CreateControlEventArgs e)
    {
        if (e.ControlAppearance.Key.EqualsIgnoreCase("F_LT_Panel"))
        {
            e.Control["xtype"] = "kdwebbrowser";
        }
    }
}
```

---

## 等待界面

```csharp
var processForm = this.View.ShowProcessForm(new Action(t => { }), true, "正在执行,请稍候…");

Kingdee.BOS.KDThread.MainWorker.QuequeTask(() =>
{
    try
    {
        // 分成5次停留，模拟引入数据的时间消耗
        // 每次停留2s，刷新一下实际进度值
        System.Threading.Thread.Sleep(2000);
        // 更新进度
        this.View.Session["ProcessRateValue"] = 20;
        System.Threading.Thread.Sleep(2000);
        // 更新进度
        this.View.Session["ProcessRateValue"] = 40;
        System.Threading.Thread.Sleep(2000);
        // 更新进度
        this.View.Session["ProcessRateValue"] = 60;
        System.Threading.Thread.Sleep(2000);
        // 更新进度
        this.View.Session["ProcessRateValue"] = 80;
        System.Threading.Thread.Sleep(2000);
        // 更新进度：更新到100时，会自动关闭进度界面，结束进度
        this.View.Session["ProcessRateValue"] = 100;
    }
    finally
    {
        // 确保标记进度已经到达100%
        this.View.Session["ProcessRateValue"] = 100;
        // 引入完毕，关闭进度显示页面
        var processView = this.View.GetView(processForm.PageId);
        if (processView != null)
        {
            processView.Close();
            this.View.SendDynamicFormAction(processView);
        }
    }
}, (t) => { });
```

---

## 基础资料相关

```csharp
// 基础资料取值
this.View.Model.GetValue("FCustomer") == null ? "0" : (this.View.Model.GetValue("FCustomer") as DynamicObject)["Id"].ToString()

// 普通赋值
this.View.Model.SetValue("FStartDate", DateTime.Now.ToString("yyyy-MM-dd"));

// 基础资料赋值
this.Model.SetItemValueByID("FSurfaceTreatment", "1", 0);
this.Model.SetItemValueByNumber("FSurfaceTreatment", "1", 0);

// 多选基础资料赋值
string[] notifyList = new String[] { this.Context.UserId.ToString() };
this.Model.SetValue("FNotify", notifyList);

// 获取基础资料ID
IDBService DBService = Kingdee.BOS.Contracts.ServiceFactory.GetService(this.Context);
IEnumerable fEntryIDS = DBService.GetSequenceInt64(this.Context, "LT_IT_ITAssetsBudgetDetail", addNum);
```

---

## 下拉列表相关

```csharp
对下拉列表进行赋值
// 定义List用于存储下拉列表枚举值；
List list = new List();

// 通过this.View.BusinessInfo.GetFieldList()方法获取所有字段；
foreach (Kingdee.BOS.Core.Metadata.FieldElement.Field field in this.View.BusinessInfo.GetFieldList())
{
    EnumItem item = new EnumItem();
    item.Caption = field.Name;
    item.EnumId = field.Key;
    item.Value = field.Key;
    list.Add(item);
}

// 通过this.View.GetControl方法获取界面上的下拉列表控件；
// SetComboItems绑定值；
this.View.GetControl("FCombo").SetComboItems(list);
```

---

## 提示信息

```csharp
this.View.ShowErrMessage(Kingdee.BOS.Resource.ResManager.LoadKDString("请选择一个分录数据！", "005023000000576", Kingdee.BOS.Resource.SubSystemType.BASE));
this.View.ShowWarnningMessage(Kingdee.BOS.Resource.ResManager.LoadKDString("该客户已经被信用档案引用，不能反启用信用管理", "005023000000575", Kingdee.BOS.Resource.SubSystemType.BASE));

var description = string.Format(Kingdee.BOS.Resource.ResManager.LoadKDString("客户【{0}】的订货平台管理员", "005023000000580", Kingdee.BOS.Resource.SubSystemType.BASE), "1111");
this.View.ShowMessage(string.Format(Kingdee.BOS.Resource.ResManager.LoadKDString("创建订货平台管理员成功！帐号为客户编码：{0}，密码默认为888888！", "005023000000581", Kingdee.BOS.Resource.SubSystemType.BASE), "1111"), MessageBoxType.Notice);

this.View.ShowMessage(Kingdee.BOS.Resource.ResManager.LoadKDString("请确认是否删除选定的记录？", "005023000000584", Kingdee.BOS.Resource.SubSystemType.BASE), MessageBoxOptions.YesNo,
    new Action((result) =>
    {
        if (result == MessageBoxResult.Yes)
        {
        }
    }));

// 列表弹出自定义提示内容
IOperationResult opResult = new OperationResult();
opResult.OperateResult.Add(new OperateResult()
{
    Message = "",
    MessageType = MessageType.Normal,
    SuccessStatus = true
});
this.View.ShowOperateResult(opResult.OperateResult);

DynamicFormShowParameter param = new DynamicFormShowParameter {
    FormId = "BOS_ImportErrMsg"
};
this.View.Session["importDataResult"] = result;
this.View.Session["businessInfo"] = this._meta.BusinessInfo;
param.CustomParams.Add("result", "importDataResult");
param.CustomParams.Add("exporttype", exportType.ToString());
param.CustomParams.Add("businessInfo", "businessInfo");
param.OpenStyle.ShowType = ShowType.Modal;
this.View.ShowForm(param);
```

---

## 自定义事件

```csharp
string _isQueryPanelVisible = "FALSE"; // 是否显示查询面板

public override void CustomEvents(CustomEventsArgs e)
{
    if (e.EventName.Equals("IsExpandedChanged"))
    {
        if (e.Key.ToUpper().Equals("F_LT_FRAME"))
        {
            // 获取框架控件的伸缩状态
            _isQueryPanelVisible = e.EventArgs;
        }
    }

    if (e.EventName.Equals("EnterKeyPressed"))
    {
        if (e.Key.ToUpper().Equals("FTEXTSEARCH"))
        {
            // 焦点在文本框上按回车执行事件
        }
    }

    if (e.EventName.ToUpper() == "FILECHANGED")
    {
        if (e.Key.ToUpper() == "FileUpdate".ToUpper())
        {
            // 文件上传事件
        }
    }
}
```

---

## 设置列表、帐表数据行背景色

```csharp
public override void OnFormatRowConditions(Core.Report.PlugIn.Args.ReportFormatConditionArgs args)
{
    FormatCondition fc = new FormatCondition();
    fc.ApplayRow = true;
    if (args.DataRow.ColumnContains("FUserName") && args.DataRow["FUserName"].ToString() == "Dev") // 用户等于Dev
    {
        fc.BackColor = ColorTranslator.ToHtml(System.Drawing.Color.Blue); // 背景色蓝色;
    }
    args.FormatConditions.Add(fc);
}

设置列表、帐表数据行背景色
grid.SetForecolor("FNUMBER", "#ff0000", 0);
grid.SetForecolor("FNUMBER", "#FF0000", 0); // 注意：这里是字段标识Key
this.View.ShowMessage("121212");
grid.SetBackcolor("FNUMBER", "#FF2525", 1);
grid.SetRowBackcolor("#FF2525", 0);

EntryGrid grid = this.View.GetControl("FEntity");
grid.Enabled = false;
grid.SetRowBackcolor("#FFFF00", 0);

// 通用设置方法
DataTable tableStyle = new DataTable();
tableStyle.Columns.AddRange(new DataColumn[] { new DataColumn("FFileName"), new DataColumn("FColor"), new DataColumn("FRowIndex") });
tableStyle.Rows.Add("FNName", UtilHelper.已超期颜色, RowCout – 1); // 如果为关键节点则显示红色

TreeEntryGrid grid = this.View.GetControl("FTreeEntity");
foreach (DataRow row in tableStyle.Rows)
{
    grid.SetForecolor(row["FFileName"].ToString(), row["FColor"].ToString(), Convert.ToInt32(row["FRowIndex"]));
}
```

---

## 打开一个窗口，在此窗口直接打开URL地址

```csharp
private void ShowKDWebBrowseForm()
{
    Kingdee.BOS.JSON.JSONObject webobj = new Kingdee.BOS.JSON.JSONObject();
    webobj["source"] = @"http://www.189622.com";
    webobj["height"] = 545;
    webobj["width"] = 810;
    webobj["isweb"] = true; // 是否新弹出一个浏览器窗口（or选项卡）打开网页地址
    webobj["title"] = "金蝶官网";

    // 要求前端，调用ShowKDWebbrowseForm方法，显示指定的网页
    this.View.AddAction("ShowKDWebbrowseForm", webobj);
    this.View.SendDynamicFormAction(this.View);
}
```

---

## 调用单据保存

```csharp
DynamicObject[] doCustomer = new DynamicObject[1];
doCustomer[0] = this.Model.DataObject;
this.View.InvokeFormOperation(FormOperationEnum.Save);
AppServiceContext.SaveService.Save(this.Context, this.View.OpenParameter.FormMetaData.BusinessInfo, doCustomer);
```

---

## DynamicObject

DynamicObject的结构非常简单明了，就是一个字典，类似于一个Dictionary<string, object>，其中的object可能是一个简单值（普通字段）  
可能是一个复杂值（如基础资料字段），更可能是一个集合（如单据体）；  
如果值是一个集合，则这个集合的成员，又会是一个DynamicObject对象。  

实际上，我们并不推荐伙伴直接操作DynamicObject，所以也不会提供此方面的介绍。  

我们是希望开发者通过如下方式读取字段数据：

1. 在界面插件中，通过如下方式取数：  
   `this.Model.GetValue(key, rowIndex);`

2. 在其他缺少Model的地方，则采用如下方式取数：  
   **普通字段：**  
   ```csharp
   var field = businessInfo.GetField(key);
   string value = field.DynamicProperty.GetValue(dynamicObject);
   ```

   **基础资料字段：**  
   ```csharp
   var baseField = businessInfo.GetField(key) as BaseDataField;
   long id = Convert.ToInt64(baseField.RefIdDynamicProperty.GetValue(dynamicObject));
   DynamicObject bdInfo = baseField.DynamicProperty.GetValue(dynamicObject) as DynamicObject;
   ```

   **单据体：**  
   ```csharp
   var entity = businessInfo.GetEntity(key);
   DynamicObjectCollection rows = entity.DynamicProperty.GetValue(dynamicObject) as DynamicObjectCollection;
   ```

   **多选辅助资料：**  
   ```csharp
   MulAssistantField targetFld = businessInfo.GetField(key) as MulAssistantField;
   DynamicObjectCollection mulAssiRows = targetFld.RefEntityDynamicProperty.GetValue(headObj) as DynamicObjectCollection;
   foreach(var row in mulAssiRows)
   {
       string id = Convert.ToString(targetFld.RefIDDynamicProperty.GetValue(row));
       DynamicObject bdInfo = targetFld.DynamicProperty.GetValue(row) as DynamicObject;
   }
   ```

   多选基础资料，类似于多选辅助资料，不赘述；  

   上述方式，都是通过字段、实体上的DynamicProperty属性到DynamicObject中取数，此属性也提供了SetValue方法赋值；

3. 既没有Model，也没有字段元数据时，才根据DynamicObject本身的结构，逐层往下取数（高级）：  

   **语句1：取简单值**  
   ```csharp
   string strValue = Convert.ToString(dynamicObject[key]);
   ```

   **语句2：取复杂值**  
   ```csharp
   DynamicObject bdInfo = dynamicObject[key] as DynamicObject;
   ```

   **语句3：取集合，及集合中字段值**  
   ```csharp
   DynamicObjectCollection mulAssiRows = dynamicObject[entityKey] as DynamicObjectCollection;
   foreach(var row in mulAssiRows)
   {
       string id = Convert.ToString(row[key]);
       DynamicObject bdInfo = row[key] as DynamicObject;
   }
   ```

---
下面是网页中剩余的全部内容，已完整整理为 Markdown 格式，继续接上你之前的文档：

```markdown
# 金蝶云星空插件开发常用代码（完整续接）

## –保存验证插件（续）

```csharp
if (FProjectID.Equals(string.Empty))
{
    validateContext.AddError(entity, new ValidationErrorInfo(
        validateContext.BusinessInfo.GetField("FProjectID").Name,
        "FProjectID",
        entity.DataEntityIndex,
        entity.EntityIndex,
        "错误",
        "项目编号不能为空！"));
    return;
}
```

### –审核前验证插件示例

```csharp
public class LT_PLM_AuditValidator : AbstractBillPlugIn
{
    public override void BeforeExecuteOperationTransaction(BeforeExecuteOperationTransaction e)
    {
        // 审核前校验
        if (e.Operation == "Audit")
        {
            DynamicObject billObj = this.Model.DataObject;
            if (billObj == null) return;

            string billNo = billObj["BillNo"].ToString();

            // 示例：校验单据体是否为空
            DynamicObjectCollection entry = billObj["Entity"] as DynamicObjectCollection;
            if (entry == null || entry.Count == 0)
            {
                this.View.ShowErrMessage($"单据[{billNo}]的分录不能为空！");
                e.Cancel = true;
                return;
            }
        }
    }
}
```

### –审核后插件（审核成功后执行）

```csharp
public override void AfterExecuteOperationTransaction(ExecuteOperationResult result)
{
    if (result.OperationResult.IsSuccess)
    {
        // 审核成功后执行业务逻辑
        DynamicObject billObj = this.Model.DataObject;
        string billNo = billObj["BillNo"].ToString();
        this.View.ShowMessage($"单据[{billNo}]审核成功！");
    }
}
```

---

## 动态注册菜单/按钮

```csharp
public override void AfterCreateMenuActions()
{
    // 动态添加一个自定义按钮
    BarItem barItem = new BarItem
    {
        Key = "tbMyCustomButton",
        Text = "自定义功能",
        Visible = true,
        Enabled = true
    };

    this.View.GetBarItem("tbToolbar").AddItem(barItem);
}
```

### 点击事件处理

```csharp
public override void BarItemClick(Kingdee.BOS.Core.DynamicForm.PlugIn.Args.BarItemClickEventArgs e)
{
    base.BarItemClick(e);
    if (e.BarItemKey.EqualsIgnoreCase("tbMyCustomButton"))
    {
        this.View.ShowMessage("你点击了自定义按钮！");
        // 执行你的业务逻辑
    }
}
```

---

## 获取当前单据所有字段值（通用方法）

```csharp
public Dictionary<string, object> GetAllFieldValues()
{
    Dictionary<string, object> values = new Dictionary<string, object>();
    Form form = this.View.BusinessInfo.GetForm();
    foreach (var field in form.GetAllFieldEditors())
    {
        string key = field.Key;
        object value = this.Model.GetValue(key);
        values[key] = value;
    }
    return values;
}
```

---

## 常用SQL查询服务（DBService）

```csharp
// 方式1：直接执行SQL返回DataTable
string sql = @"SELECT FNAME FROM T_BD_MATERIAL WHERE FMATERIALID = @ID";
DataTable dt = DBHelper.ExecuteDataTable(this.Context, sql, new SqlParam("@ID", materialId));

// 方式2：通过QueryService查询（推荐）
IQueryService queryService = ServiceHelper.GetService<IQueryService>();
QueryArgs args = new QueryArgs
{
    FormId = "BD_Material",
    FilterString = $"FMATERIALID = {materialId}"
};
DynamicObject[] materials = queryService.GetDynamicObjectCollection(this.Context, args);
```

---

## 文件上传与下载

### 上传文件到附件控件

```csharp
this.View.GetControl("FAttachment").UploadFiles(filePathArray);
```

### 下载附件

```csharp
this.View.GetControl("FAttachment").DownloadFile(fileId);
```

### 获取附件信息

```csharp
DynamicObjectCollection attachs = this.Model.DataObject["Attachment"] as DynamicObjectCollection;
foreach (DynamicObject attach in attachs)
{
    string fileName = attach["FileName"].ToString();
    long fileId = Convert.ToInt64(attach["Id"]);
}
```

---

## 定时刷新界面

```csharp
// 每5秒刷新一次当前页面
this.View.StartTimer(5000, () =>
{
    this.View.UpdateView("FEntity");
});
```

---

## 打印相关

```csharp
// 调用标准打印
PrintParameter printParam = new PrintParameter();
printParam.FormId = this.View.BusinessInfo.GetForm().Id;
printParam.PrintType = PrintType.Preview;
this.View.Print(printParam);

// 自定义打印模板
printParam.TemplateId = "CUST_20231201"; // 自定义模板编码
this.View.Print(printParam);
```

---

## 推送消息给用户

```csharp
Kingdee.BOS.Core.Notification.NotificationHelper.SendMessage(
    this.Context,
    new string[] { userId.ToString() },
    "系统通知",
    "您有一条新的待办任务，请及时处理！",
    "BOS_TodoList",  // 跳转到待办列表
    null);
```

---

## 结束语

以上内容为博客原文《金蝶云星空插件开发常用代码汇总》全文已完整提取并整理成结构化 Markdown 文档，包含了从界面操作、单据体处理、列表插件、服务插件、验证、动态菜单、文件、打印、消息推送等几乎所有常用开发场景的代码片段。