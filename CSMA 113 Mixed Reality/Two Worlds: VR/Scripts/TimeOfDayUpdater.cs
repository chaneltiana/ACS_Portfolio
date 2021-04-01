using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TimeOfDayUpdater : MonoBehaviour
{

    float speed = 0.5f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update(){
        gameObject.transform.Rotate(Vector3.up, speed); //change 0.1 value to increase/decrease speed
    }
}
