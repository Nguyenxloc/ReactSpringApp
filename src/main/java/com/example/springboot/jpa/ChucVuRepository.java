package com.example.springboot.jpa;
import com.example.springboot.model.ChucVu;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
@Repository
public interface ChucVuRepository extends CrudRepository<ChucVu,String> {
     ChucVu findChucVuByIdChucVu(String idChucVu);
     ArrayList<ChucVu> findChucVuByTen(String ten);
}
