package com.perfiles.mhd.Repository;

import org.springframework.stereotype.Repository;
import com.perfiles.mhd.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface IPersonaRepository extends JpaRepository <Persona, Long>{
    
}
