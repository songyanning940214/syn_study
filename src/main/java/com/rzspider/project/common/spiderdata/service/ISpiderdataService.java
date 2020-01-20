package com.rzspider.project.common.spiderdata.service;

import java.util.List;

import com.rzspider.project.common.spiderdata.domain.ReturnSpiderDataMessage;
import com.rzspider.project.common.spiderdata.domain.Spiderdata;
import com.rzspider.project.spider.spidertask.domain.Spidertaskinfo;
/**
 * 爬虫数据详情 服务层
 * 
 * @author ricozhou
 * @date 2018-06-11
 */
public interface ISpiderdataService 
{
	
	/**
     * 查询爬虫数据详情信息
     * 
     * @param spiderDataId 爬虫数据详情ID
     * @return 爬虫数据详情信息
     */
	public Spiderdata selectDataById(Integer spiderDataId);
	
	/**
     * 查询爬虫数据详情列表
     * 
     * @param data 爬虫数据详情信息
     * @return 爬虫数据详情集合
     */
	public List<Spiderdata> selectDataList(Spiderdata data);
	
	/**
     * 新增爬虫数据详情
     * 
     * @param data 爬虫数据详情信息
     * @return 结果
     */
	public int insertData(Spiderdata data);
	
	/**
     * 修改爬虫数据详情
     * 
     * @param data 爬虫数据详情信息
     * @return 结果
     */
	public int updateData(Spiderdata data);
	
	/**
     * 保存爬虫数据详情
     * 
     * @param data 爬虫数据详情信息
     * @return 结果
     */
	public int saveData(Spiderdata data);
	
	/**
     * 删除爬虫数据详情信息
     * 
     * @param spiderDataId 爬虫数据详情ID
     * @return 结果
     */
	public int deleteDataById(Integer spiderDataId);
	
	/**
     * 批量删除爬虫数据详情信息
     * 
     * @param spiderDataIds 需要删除的数据ID
     * @return 结果
     */
	public int batchDeleteData(Integer[] spiderDataIds);

	public int deleteDataByTaskinfoId(Spiderdata spiderdata);

	public List<Spiderdata> selectDataListByTaskInfoIdAndFlag(Spiderdata spiderdata);

	public ReturnSpiderDataMessage getSpiderDataToByte(List<Spiderdata> list, Spidertaskinfo spidertaskinfo);

	public void deleteSpiderDataByFlag(Integer flag);
	
}
