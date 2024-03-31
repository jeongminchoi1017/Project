package com.rmsoft.mapper;

import com.rmsoft.dto.ListDTO;
import com.rmsoft.dto.SubscribeDTO;
import com.rmsoft.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SubscribeMapper {

	public void insertSubscribe(SubscribeDTO dto);
	public ListDTO selectSubscribe(String uid);
	public List<UserDTO> selectUsers();
	public void updateSubscribe(String uid);
	public void updateEnd(String uid);
	public int deleteUser(String uid);
}
